import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {BookingStaffMemberBaseCollectionResponse} from './bookingStaffMemberBaseCollectionResponse';
import {createBookingStaffMemberBaseFromDiscriminatorValue} from './createBookingStaffMemberBaseFromDiscriminatorValue';
import {BookingStaffMemberBaseImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingStaffMemberBaseCollectionResponseImpl implements AdditionalDataHolder, BookingStaffMemberBaseCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: BookingStaffMemberBase[] | undefined;
    /**
     * Instantiates a new BookingStaffMemberBaseCollectionResponse and sets the default values.
     * @param bookingStaffMemberBaseCollectionResponseParameterValue 
     */
    public constructor(bookingStaffMemberBaseCollectionResponseParameterValue?: BookingStaffMemberBaseCollectionResponse | undefined) {
        this.additionalData = bookingStaffMemberBaseCollectionResponseParameterValue?.additionalData ? bookingStaffMemberBaseCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = bookingStaffMemberBaseCollectionResponseParameterValue?.nextLink ;
        this.value = bookingStaffMemberBaseCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<BookingStaffMemberBaseImpl>(createBookingStaffMemberBaseFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: BookingStaffMemberBaseImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new BookingStaffMemberBaseImpl(element));});
        writer.writeCollectionOfObjectValues<BookingStaffMemberBaseImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
