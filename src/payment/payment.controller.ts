import { Body, Controller, Post } from '@nestjs/common';
import { PaymentDetail } from './payment.model';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('payment')
  async payment(@Body() model: PaymentDetail): Promise<swagger_api_response> {
    return await this.paymentService.payment(model);
  }
}
