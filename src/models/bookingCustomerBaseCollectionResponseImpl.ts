import {BookingCustomerBase} from './bookingCustomerBase';
import {BookingCustomerBaseCollectionResponse} from './bookingCustomerBaseCollectionResponse';
import {createBookingCustomerBaseFromDiscriminatorValue} from './createBookingCustomerBaseFromDiscriminatorValue';
import {BookingCustomerBaseImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingCustomerBaseCollectionResponseImpl implements AdditionalDataHolder, BookingCustomerBaseCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: BookingCustomerBase[] | undefined;
    /**
     * Instantiates a new BookingCustomerBaseCollectionResponse and sets the default values.
     * @param bookingCustomerBaseCollectionResponseParameterValue 
     */
    public constructor(bookingCustomerBaseCollectionResponseParameterValue?: BookingCustomerBaseCollectionResponse | undefined) {
        this.additionalData = bookingCustomerBaseCollectionResponseParameterValue?.additionalData ? bookingCustomerBaseCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = bookingCustomerBaseCollectionResponseParameterValue?.nextLink ;
        this.value = bookingCustomerBaseCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<BookingCustomerBaseImpl>(createBookingCustomerBaseFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: BookingCustomerBaseImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new BookingCustomerBaseImpl(element));});
        writer.writeCollectionOfObjectValues<BookingCustomerBaseImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
