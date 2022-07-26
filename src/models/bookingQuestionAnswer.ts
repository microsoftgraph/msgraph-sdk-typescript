import {AnswerInputType} from './answerInputType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingQuestionAnswer implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The answer given by the user in case the answerInputType is text. */
    private _answer?: string | undefined;
    /** The expected answer type. The possible values are: text, radioButton, unknownFutureValue. */
    private _answerInputType?: AnswerInputType | undefined;
    /** In case the answerInputType is radioButton, this will consists of a list of possible answer values. */
    private _answerOptions?: string[] | undefined;
    /** Indicates whether it is mandatory to answer the custom question. */
    private _isRequired?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The question. */
    private _question?: string | undefined;
    /** The ID of the custom question. */
    private _questionId?: string | undefined;
    /** The answers selected by the user. */
    private _selectedOptions?: string[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the answer property value. The answer given by the user in case the answerInputType is text.
     * @returns a string
     */
    public get answer() {
        return this._answer;
    };
    /**
     * Sets the answer property value. The answer given by the user in case the answerInputType is text.
     * @param value Value to set for the answer property.
     */
    public set answer(value: string | undefined) {
        this._answer = value;
    };
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
        this._answerInputType = value;
    };
    /**
     * Gets the answerOptions property value. In case the answerInputType is radioButton, this will consists of a list of possible answer values.
     * @returns a string
     */
    public get answerOptions() {
        return this._answerOptions;
    };
    /**
     * Sets the answerOptions property value. In case the answerInputType is radioButton, this will consists of a list of possible answer values.
     * @param value Value to set for the answerOptions property.
     */
    public set answerOptions(value: string[] | undefined) {
        this._answerOptions = value;
    };
    /**
     * Instantiates a new bookingQuestionAnswer and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.bookingQuestionAnswer";
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "question": n => { this.question = n.getStringValue(); },
            "questionId": n => { this.questionId = n.getStringValue(); },
            "selectedOptions": n => { this.selectedOptions = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the isRequired property value. Indicates whether it is mandatory to answer the custom question.
     * @returns a boolean
     */
    public get isRequired() {
        return this._isRequired;
    };
    /**
     * Sets the isRequired property value. Indicates whether it is mandatory to answer the custom question.
     * @param value Value to set for the isRequired property.
     */
    public set isRequired(value: boolean | undefined) {
        this._isRequired = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the question property value. The question.
     * @returns a string
     */
    public get question() {
        return this._question;
    };
    /**
     * Sets the question property value. The question.
     * @param value Value to set for the question property.
     */
    public set question(value: string | undefined) {
        this._question = value;
    };
    /**
     * Gets the questionId property value. The ID of the custom question.
     * @returns a string
     */
    public get questionId() {
        return this._questionId;
    };
    /**
     * Sets the questionId property value. The ID of the custom question.
     * @param value Value to set for the questionId property.
     */
    public set questionId(value: string | undefined) {
        this._questionId = value;
    };
    /**
     * Gets the selectedOptions property value. The answers selected by the user.
     * @returns a string
     */
    public get selectedOptions() {
        return this._selectedOptions;
    };
    /**
     * Sets the selectedOptions property value. The answers selected by the user.
     * @param value Value to set for the selectedOptions property.
     */
    public set selectedOptions(value: string[] | undefined) {
        this._selectedOptions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("answer", this.answer);
        writer.writeEnumValue<AnswerInputType>("answerInputType", this.answerInputType);
        writer.writeCollectionOfPrimitiveValues<string>("answerOptions", this.answerOptions);
        writer.writeBooleanValue("isRequired", this.isRequired);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("question", this.question);
        writer.writeStringValue("questionId", this.questionId);
        writer.writeCollectionOfPrimitiveValues<string>("selectedOptions", this.selectedOptions);
        writer.writeAdditionalData(this.additionalData);
    };
}
