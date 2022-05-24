import {BookingQuestionAssignment} from './bookingQuestionAssignment';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingQuestionAssignmentImpl implements AdditionalDataHolder, BookingQuestionAssignment, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether it is mandatory to answer the custom question. */
    public isRequired?: boolean | undefined;
    /** If it is mandatory to answer the custom question. */
    public questionId?: string | undefined;
    /**
     * Instantiates a new bookingQuestionAssignment and sets the default values.
     * @param bookingQuestionAssignmentParameterValue 
     */
    public constructor(bookingQuestionAssignmentParameterValue?: BookingQuestionAssignment | undefined) {
        this.additionalData = bookingQuestionAssignmentParameterValue?.additionalData ? bookingQuestionAssignmentParameterValue?.additionalData! : {}
        this.isRequired = bookingQuestionAssignmentParameterValue?.isRequired ;
        this.questionId = bookingQuestionAssignmentParameterValue?.questionId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isRequired": n => { this.isRequired = n.getBooleanValue(); },
            "questionId": n => { this.questionId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isRequired){
        writer.writeBooleanValue("isRequired", this.isRequired);
        }
        if(this.questionId){
        writer.writeStringValue("questionId", this.questionId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
