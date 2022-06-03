import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCurrency extends Entity, Partial<Parsable> {
    /** The currency symbol. For example, the currency symbol for the US dollar and for the Australian dollar is $. */
    symbol?: string | undefined;
}
