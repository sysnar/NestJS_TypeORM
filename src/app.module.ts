import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { BoardsService } from './boards/boards.service';
import { BoardsController } from './boards/boards.controller';
import { BoardsModule } from './boards/boards.module';


@Module({
  imports: [MovieModule, BoardsModule],
  providers: [BoardsService],
  controllers: [BoardsController],
})
export class AppModule { }
