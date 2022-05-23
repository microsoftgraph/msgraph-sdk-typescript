import {BookingAppointment} from './bookingAppointment';
import {BookingAppointmentCollectionResponse} from './bookingAppointmentCollectionResponse';
import {createBookingAppointmentFromDiscriminatorValue} from './createBookingAppointmentFromDiscriminatorValue';
import {BookingAppointmentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingAppointmentCollectionResponseImpl implements AdditionalDataHolder, BookingAppointmentCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: BookingAppointment[] | undefined;
    /**
     * Instantiates a new BookingAppointmentCollectionResponse and sets the default values.
     * @param bookingAppointmentCollectionResponseParameterValue 
     */
    public constructor(bookingAppointmentCollectionResponseParameterValue?: BookingAppointmentCollectionResponse | undefined) {
        this.additionalData = bookingAppointmentCollectionResponseParameterValue?.additionalData ? bookingAppointmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = bookingAppointmentCollectionResponseParameterValue?.nextLink ;
        this.value = bookingAppointmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<BookingAppointmentImpl>(createBookingAppointmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: BookingAppointmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new BookingAppointmentImpl(element));});
        writer.writeCollectionOfObjectValues<BookingAppointmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
