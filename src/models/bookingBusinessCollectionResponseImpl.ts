import {BookingBusiness} from './bookingBusiness';
import {BookingBusinessCollectionResponse} from './bookingBusinessCollectionResponse';
import {createBookingBusinessFromDiscriminatorValue} from './createBookingBusinessFromDiscriminatorValue';
import {BookingBusinessImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingBusinessCollectionResponseImpl implements AdditionalDataHolder, BookingBusinessCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: BookingBusiness[] | undefined;
    /**
     * Instantiates a new BookingBusinessCollectionResponse and sets the default values.
     * @param bookingBusinessCollectionResponseParameterValue 
     */
    public constructor(bookingBusinessCollectionResponseParameterValue?: BookingBusinessCollectionResponse | undefined) {
        this.additionalData = bookingBusinessCollectionResponseParameterValue?.additionalData ? bookingBusinessCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = bookingBusinessCollectionResponseParameterValue?.nextLink ;
        this.value = bookingBusinessCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<BookingBusinessImpl>(createBookingBusinessFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: BookingBusinessImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new BookingBusinessImpl(element));});
        writer.writeCollectionOfObjectValues<BookingBusinessImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
