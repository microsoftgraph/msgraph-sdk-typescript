import {BookingBusiness} from './bookingBusiness';
import {BookingCurrency} from './bookingCurrency';
import {createBookingBusinessFromDiscriminatorValue} from './createBookingBusinessFromDiscriminatorValue';
import {createBookingCurrencyFromDiscriminatorValue} from './createBookingCurrencyFromDiscriminatorValue';
import {BookingBusinessImpl, BookingCurrencyImpl} from './index';
import {SolutionsRoot} from './solutionsRoot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SolutionsRootImpl implements AdditionalDataHolder, Parsable, SolutionsRoot {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The bookingBusinesses property */
    public bookingBusinesses?: BookingBusiness[] | undefined;
    /** The bookingCurrencies property */
    public bookingCurrencies?: BookingCurrency[] | undefined;
    /**
     * Instantiates a new SolutionsRoot and sets the default values.
     * @param solutionsRootParameterValue 
     */
    public constructor(solutionsRootParameterValue?: SolutionsRoot | undefined) {
        this.additionalData = solutionsRootParameterValue?.additionalData ? solutionsRootParameterValue?.additionalData! : {}
        this.bookingBusinesses = solutionsRootParameterValue?.bookingBusinesses ;
        this.bookingCurrencies = solutionsRootParameterValue?.bookingCurrencies ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bookingBusinesses": n => { this.bookingBusinesses = n.getCollectionOfObjectValues<BookingBusinessImpl>(createBookingBusinessFromDiscriminatorValue); },
            "bookingCurrencies": n => { this.bookingCurrencies = n.getCollectionOfObjectValues<BookingCurrencyImpl>(createBookingCurrencyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.bookingBusinesses && this.bookingBusinesses.length != 0){        const bookingBusinessesArrValue: BookingBusinessImpl[] = []; this.bookingBusinesses?.forEach(element => {bookingBusinessesArrValue.push(new BookingBusinessImpl(element));});
        writer.writeCollectionOfObjectValues<BookingBusinessImpl>("bookingBusinesses", bookingBusinessesArrValue);
        }
        if(this.bookingCurrencies && this.bookingCurrencies.length != 0){        const bookingCurrenciesArrValue: BookingCurrencyImpl[] = []; this.bookingCurrencies?.forEach(element => {bookingCurrenciesArrValue.push(new BookingCurrencyImpl(element));});
        writer.writeCollectionOfObjectValues<BookingCurrencyImpl>("bookingCurrencies", bookingCurrenciesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
