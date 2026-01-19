import { Test, TestingModule } from '@nestjs/testing';
import { IasService } from './ias.service';

describe('IasService', () => {
  let service: IasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IasService],
    }).compile();

    service = module.get<IasService>(IasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
