import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { Repository } from 'typeorm';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';
import { PaymentDetail } from './payment.model';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private _paymentRepository: Repository<Payment>,
  ) {}

  async payment(model: PaymentDetail): Promise<swagger_api_response> {
    if (
      model.cardName == null ||
      model.cardNumber == null ||
      model.expYear == null ||
      model.expMonth == null ||
      model.cvv == null
    ) {
      throw new Error('You have already registered, Please try to login');
    } else {
      await this._paymentRepository.save({
        cardName: model.cardName,
        isActive: true,
        isDeleted: false,
        cardNumber: model.cardNumber,
        expMonth: model.expMonth,
        expYear: model.expYear,
        cvv: model.cvv,
        createdBy: 0,
        createdDate: new Date(),
        modifyBy: 0,
        modifyDate: new Date(),
        roleId: 2,
      });
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'Your Payment is completed successfully!!';
      return data;
    }
  }
}
