import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { BoardStatus } from './boards-status.enum';
import { Board } from './boards.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/boards-status-validation.pip';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoard(@GetUser() user: User): Promise<Board[]> {
    return this.boardService.getAllBoards(user);
  }
  // @Get()
  // getAllBoard(): Board[] {
  //   return this.boardService.getAllBoards();
  // }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }
  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id);
  // }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto, @GetUser() user: User): Promise<Board> {
    return this.boardService.createBoard(createBoardDto, user);
  }
  // @Post()
  // @UsePipes(ValidationPipe)
  // craeteBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardService.createBoard(createBoardDto);
  // }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number, @GetUser() user: User): Promise<void> {
    return this.boardService.deleteBoard(id, user);
  }
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardService.deleteBoard(id);
  // }

  @Patch('/:id/status')
  updateBoardStatus(@Param('id') id: number, @Body('status', BoardStatusValidationPipe) status: BoardStatus) {
    return this.boardService.updateBoardStatus(id, status);
  }
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus
  // ) {
  //   return this.boardService.updateBoardStatus(id, status)
  // }
}
