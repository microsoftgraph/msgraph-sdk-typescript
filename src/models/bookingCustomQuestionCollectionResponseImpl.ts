import {BookingCustomQuestion} from './bookingCustomQuestion';
import {BookingCustomQuestionCollectionResponse} from './bookingCustomQuestionCollectionResponse';
import {createBookingCustomQuestionFromDiscriminatorValue} from './createBookingCustomQuestionFromDiscriminatorValue';
import {BookingCustomQuestionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingCustomQuestionCollectionResponseImpl implements AdditionalDataHolder, BookingCustomQuestionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: BookingCustomQuestion[] | undefined;
    /**
     * Instantiates a new BookingCustomQuestionCollectionResponse and sets the default values.
     * @param bookingCustomQuestionCollectionResponseParameterValue 
     */
    public constructor(bookingCustomQuestionCollectionResponseParameterValue?: BookingCustomQuestionCollectionResponse | undefined) {
        this.additionalData = bookingCustomQuestionCollectionResponseParameterValue?.additionalData ? bookingCustomQuestionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = bookingCustomQuestionCollectionResponseParameterValue?.nextLink ;
        this.value = bookingCustomQuestionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<BookingCustomQuestionImpl>(createBookingCustomQuestionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: BookingCustomQuestionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new BookingCustomQuestionImpl(element));});
        writer.writeCollectionOfObjectValues<BookingCustomQuestionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
