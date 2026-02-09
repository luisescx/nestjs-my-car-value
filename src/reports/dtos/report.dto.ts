import { Expose, Transform } from 'class-transformer';
import { Report } from '../report.entity';

export class ReportDto {
  @Expose()
  id: number;

  @Expose()
  price: number;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  year: number;

  @Expose()
  lgn: number;

  @Expose()
  lat: number;

  @Expose()
  mileage: number;

  @Transform(({ obj }: { obj: Report }) => obj.user.id)
  @Expose()
  userId: number;
}
