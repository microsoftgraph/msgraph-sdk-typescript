import {Entity} from './entity';

export interface BookingCurrency extends Entity{
    /** The currency symbol. For example, the currency symbol for the US dollar and for the Australian dollar is $. */
    symbol?:string | undefined;
}
