import {BookingCurrency} from './bookingCurrency';
import {BookingCurrencyCollectionResponse} from './bookingCurrencyCollectionResponse';
import {createBookingCurrencyFromDiscriminatorValue} from './createBookingCurrencyFromDiscriminatorValue';
import {BookingCurrencyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingCurrencyCollectionResponseImpl implements AdditionalDataHolder, BookingCurrencyCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: BookingCurrency[] | undefined;
    /**
     * Instantiates a new BookingCurrencyCollectionResponse and sets the default values.
     * @param bookingCurrencyCollectionResponseParameterValue 
     */
    public constructor(bookingCurrencyCollectionResponseParameterValue?: BookingCurrencyCollectionResponse | undefined) {
        this.additionalData = bookingCurrencyCollectionResponseParameterValue?.additionalData ? bookingCurrencyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = bookingCurrencyCollectionResponseParameterValue?.nextLink ;
        this.value = bookingCurrencyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<BookingCurrencyImpl>(createBookingCurrencyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: BookingCurrencyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new BookingCurrencyImpl(element));});
        writer.writeCollectionOfObjectValues<BookingCurrencyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
