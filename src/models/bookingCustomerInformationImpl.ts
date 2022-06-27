import {BookingCustomerInformation} from './bookingCustomerInformation';
import {BookingQuestionAnswer} from './bookingQuestionAnswer';
import {createBookingQuestionAnswerFromDiscriminatorValue} from './createBookingQuestionAnswerFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {BookingCustomerInformationBaseImpl, BookingQuestionAnswerImpl, LocationImpl} from './index';
import {Location} from './location';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingCustomerInformationImpl extends BookingCustomerInformationBaseImpl implements BookingCustomerInformation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The ID of the bookingCustomer for this appointment. If no ID is specified when an appointment is created, then a new bookingCustomer object is created. Once set, you should consider the customerId immutable. */
    public customerId?: string | undefined;
    /** It consists of the list of custom questions and answers given by the customer as part of the appointment. */
    public customQuestionAnswers?: BookingQuestionAnswer[] | undefined;
    /** The SMTP address of the bookingCustomer who is booking the appointment. */
    public emailAddress?: string | undefined;
    /** Represents location information for the bookingCustomer who is booking the appointment. */
    public location?: Location | undefined;
    /** The customer's name. */
    public name?: string | undefined;
    /** Notes from the customer associated with this appointment. You can get the value only when reading this bookingAppointment by its ID. You can set this property only when initially creating an appointment with a new customer. After that point, the value is computed from the customer represented by the customerId. */
    public notes?: string | undefined;
    /** The customer's phone number. */
    public phone?: string | undefined;
    /** The time zone of the customer. For a list of possible values, see dateTimeTimeZone. */
    public timeZone?: string | undefined;
    /**
     * Instantiates a new BookingCustomerInformation and sets the default values.
     * @param bookingCustomerInformationParameterValue 
     */
    public constructor(bookingCustomerInformationParameterValue?: BookingCustomerInformation | undefined) {
        super(bookingCustomerInformationParameterValue);
        this.additionalData = bookingCustomerInformationParameterValue?.additionalData ? bookingCustomerInformationParameterValue?.additionalData! : {};
        this.customerId = bookingCustomerInformationParameterValue?.customerId;
        const customQuestionAnswersArrValue: BookingQuestionAnswerImpl[] = []; bookingCustomerInformationParameterValue.customQuestionAnswers?.forEach(element => {customQuestionAnswersArrValue.push(element instanceof BookingQuestionAnswerImpl? element : new BookingQuestionAnswerImpl(element));});
        this.customQuestionAnswers = customQuestionAnswersArrValue;
        this.emailAddress = bookingCustomerInformationParameterValue?.emailAddress;
        this.location = bookingCustomerInformationParameterValue?.location instanceof LocationImpl? bookingCustomerInformationParameterValue?.location:new LocationImpl(bookingCustomerInformationParameterValue?.location);
        this.name = bookingCustomerInformationParameterValue?.name;
        this.notes = bookingCustomerInformationParameterValue?.notes;
        this.phone = bookingCustomerInformationParameterValue?.phone;
        this.timeZone = bookingCustomerInformationParameterValue?.timeZone;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "customerId": n => { this.customerId = n.getStringValue(); },
            "customQuestionAnswers": n => { this.customQuestionAnswers = n.getCollectionOfObjectValues<BookingQuestionAnswerImpl>(createBookingQuestionAnswerFromDiscriminatorValue); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "location": n => { this.location = n.getObjectValue<LocationImpl>(createLocationFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "phone": n => { this.phone = n.getStringValue(); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.customerId){
            writer.writeStringValue("customerId", this.customerId);
        }
        if(this.customQuestionAnswers && this.customQuestionAnswers.length != 0){        const customQuestionAnswersArrValue: BookingQuestionAnswerImpl[] = []; this.customQuestionAnswers?.forEach(element => {customQuestionAnswersArrValue.push(element instanceof BookingQuestionAnswerImpl? element : new BookingQuestionAnswerImpl(element));});
            writer.writeCollectionOfObjectValues<BookingQuestionAnswerImpl>("customQuestionAnswers", customQuestionAnswersArrValue);
        }
        if(this.emailAddress){
            writer.writeStringValue("emailAddress", this.emailAddress);
        }
        if(this.location){
            writer.writeObjectValue<LocationImpl>("location", new LocationImpl(this.location));
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.notes){
            writer.writeStringValue("notes", this.notes);
        }
        if(this.phone){
            writer.writeStringValue("phone", this.phone);
        }
        if(this.timeZone){
            writer.writeStringValue("timeZone", this.timeZone);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
