import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateExpenseDto {
    @IsString()
    towards: string

    @IsNumber()
    amount: number

    @IsDate()
    date: Date
}
