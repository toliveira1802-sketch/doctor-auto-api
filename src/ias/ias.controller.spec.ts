import { Test, TestingModule } from '@nestjs/testing';
import { IasController } from './ias.controller';

describe('IasController', () => {
  let controller: IasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IasController],
    }).compile();

    controller = module.get<IasController>(IasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
