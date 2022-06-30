import {AnswerInputType} from './answerInputType';
import {BookingCustomQuestion} from './bookingCustomQuestion';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents a custom question of the business. */
export class BookingCustomQuestionImpl extends EntityImpl implements BookingCustomQuestion {
    /** The expected answer type. The possible values are: text, radioButton, unknownFutureValue. */
    private _answerInputType?: AnswerInputType | undefined;
    /** List of possible answer values. */
    private _answerOptions?: string[] | undefined;
    /** Display name of this entity. */
    private _displayName?: string | undefined;
    /**
     * Gets the answerInputType property value. The expected answer type. The possible values are: text, radioButton, unknownFutureValue.
     * @returns a answerInputType
     */
    public get answerInputType() {
        return this._answerInputType;
    };
    /**
     * Sets the answerInputType property value. The expected answer type. The possible values are: text, radioButton, unknownFutureValue.
     * @param value Value to set for the answerInputType property.
     */
    public set answerInputType(value: AnswerInputType | undefined) {
        if(value) {
            this._answerInputType = value;
        }
    };
    /**
     * Gets the answerOptions property value. List of possible answer values.
     * @returns a string
     */
    public get answerOptions() {
        return this._answerOptions;
    };
    /**
     * Sets the answerOptions property value. List of possible answer values.
     * @param value Value to set for the answerOptions property.
     */
    public set answerOptions(value: string[] | undefined) {
        if(value) {
            this._answerOptions = value;
        }
    };
    /**
     * Instantiates a new bookingCustomQuestion and sets the default values.
     * @param bookingCustomQuestionParameterValue 
     */
    public constructor(bookingCustomQuestionParameterValue?: BookingCustomQuestion | undefined) {
        super(bookingCustomQuestionParameterValue);
        this._answerInputType = bookingCustomQuestionParameterValue?.answerInputType;
        this._answerOptions = bookingCustomQuestionParameterValue?.answerOptions;
        this._displayName = bookingCustomQuestionParameterValue?.displayName;
    };
    /**
     * Gets the displayName property value. Display name of this entity.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of this entity.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
