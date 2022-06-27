import {AnswerInputType} from './answerInputType';
import {BookingQuestionAnswer} from './bookingQuestionAnswer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingQuestionAnswerImpl implements BookingQuestionAnswer {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The answer given by the user in case the answerInputType is text. */
    public answer?: string | undefined;
    /** The expected answer type. The possible values are: text, radioButton, unknownFutureValue. */
    public answerInputType?: AnswerInputType | undefined;
    /** In case the answerInputType is radioButton, this will consists of a list of possible answer values. */
    public answerOptions?: string[] | undefined;
    /** Indicates whether it is mandatory to answer the custom question. */
    public isRequired?: boolean | undefined;
    /** The question. */
    public question?: string | undefined;
    /** The ID of the custom question. */
    public questionId?: string | undefined;
    /** The answers selected by the user. */
    public selectedOptions?: string[] | undefined;
    /**
     * Instantiates a new bookingQuestionAnswer and sets the default values.
     * @param bookingQuestionAnswerParameterValue 
     */
    public constructor(bookingQuestionAnswerParameterValue?: BookingQuestionAnswer | undefined) {
        this.additionalData = bookingQuestionAnswerParameterValue?.additionalData ? bookingQuestionAnswerParameterValue?.additionalData! : {};
        this.answer = bookingQuestionAnswerParameterValue?.answer;
        this.answerInputType = bookingQuestionAnswerParameterValue?.answerInputType;
        this.answerOptions = bookingQuestionAnswerParameterValue?.answerOptions;
        this.isRequired = bookingQuestionAnswerParameterValue?.isRequired;
        this.question = bookingQuestionAnswerParameterValue?.question;
        this.questionId = bookingQuestionAnswerParameterValue?.questionId;
        this.selectedOptions = bookingQuestionAnswerParameterValue?.selectedOptions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "answer": n => { this.answer = n.getStringValue(); },
            "answerInputType": n => { this.answerInputType = n.getEnumValue<AnswerInputType>(AnswerInputType); },
            "answerOptions": n => { this.answerOptions = n.getCollectionOfPrimitiveValues<string>(); },
            "isRequired": n => { this.isRequired = n.getBooleanValue(); },
            "question": n => { this.question = n.getStringValue(); },
            "questionId": n => { this.questionId = n.getStringValue(); },
            "selectedOptions": n => { this.selectedOptions = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.answer){
            writer.writeStringValue("answer", this.answer);
        }
        if(this.answerInputType){
            writer.writeEnumValue<AnswerInputType>("answerInputType", this.answerInputType);
        }
        if(this.answerOptions){
            writer.writeCollectionOfPrimitiveValues<string>("answerOptions", this.answerOptions);
        }
        if(this.isRequired){
            writer.writeBooleanValue("isRequired", this.isRequired);
        }
        if(this.question){
            writer.writeStringValue("question", this.question);
        }
        if(this.questionId){
            writer.writeStringValue("questionId", this.questionId);
        }
        if(this.selectedOptions){
            writer.writeCollectionOfPrimitiveValues<string>("selectedOptions", this.selectedOptions);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
