import {AnswerInputType} from './answerInputType';
import {BookingCustomQuestion} from './bookingCustomQuestion';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents a custom question of the business. */
export class BookingCustomQuestionImpl extends EntityImpl implements BookingCustomQuestion, Parsable {
    /** The expected answer type. The possible values are: text, radioButton, unknownFutureValue. */
    public answerInputType?: AnswerInputType | undefined;
    /** List of possible answer values. */
    public answerOptions?: string[] | undefined;
    /** Display name of this entity. */
    public displayName?: string | undefined;
    /**
     * Instantiates a new bookingCustomQuestion and sets the default values.
     * @param bookingCustomQuestionParameterValue 
     */
    public constructor(bookingCustomQuestionParameterValue?: BookingCustomQuestion | undefined) {
        super();
        this.answerInputType = bookingCustomQuestionParameterValue?.answerInputType ;
        this.answerOptions = bookingCustomQuestionParameterValue?.answerOptions ;
        this.displayName = bookingCustomQuestionParameterValue?.displayName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "answerInputType": n => { this.answerInputType = n.getEnumValue<AnswerInputType>(AnswerInputType); },
            "answerOptions": n => { this.answerOptions = n.getCollectionOfPrimitiveValues<string>(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.answerInputType){
        writer.writeEnumValue<AnswerInputType>("answerInputType", this.answerInputType);
        }
        if(this.answerOptions){
        writer.writeCollectionOfPrimitiveValues<string>("answerOptions", this.answerOptions);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
    };
}
