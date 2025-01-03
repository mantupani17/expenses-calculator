import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ExpensesDocument = HydratedDocument<Expenses>

@Schema({ strict: false })
export class Expenses {
    @Prop({ default: Date.now })
    createdAt: Date

    @Prop({type: Number})
    amount: number
    
    @Prop({ type: Date })
    date: Date

    @Prop({})
    towards: string
}

export const ExpensesSchema = SchemaFactory.createForClass(Expenses)