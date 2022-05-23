import {BookingService} from './bookingService';
import {BookingServiceCollectionResponse} from './bookingServiceCollectionResponse';
import {createBookingServiceFromDiscriminatorValue} from './createBookingServiceFromDiscriminatorValue';
import {BookingServiceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingServiceCollectionResponseImpl implements AdditionalDataHolder, BookingServiceCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: BookingService[] | undefined;
    /**
     * Instantiates a new BookingServiceCollectionResponse and sets the default values.
     * @param bookingServiceCollectionResponseParameterValue 
     */
    public constructor(bookingServiceCollectionResponseParameterValue?: BookingServiceCollectionResponse | undefined) {
        this.additionalData = bookingServiceCollectionResponseParameterValue?.additionalData ? bookingServiceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = bookingServiceCollectionResponseParameterValue?.nextLink ;
        this.value = bookingServiceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<BookingServiceImpl>(createBookingServiceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: BookingServiceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new BookingServiceImpl(element));});
        writer.writeCollectionOfObjectValues<BookingServiceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
