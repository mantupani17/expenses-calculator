import { Injectable } from '@nestjs/common';
import { BaseService } from '../commons/sql/baseService';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from '../entities/expense.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExpensesService extends BaseService{
    constructor(@InjectRepository(Expense) expense: Repository<Expense>,) {
      super(expense)
    }
}
