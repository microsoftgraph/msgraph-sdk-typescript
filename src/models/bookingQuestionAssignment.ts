import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingQuestionAssignment implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether it is mandatory to answer the custom question. */
    private _isRequired?: boolean | undefined;
    /** If it is mandatory to answer the custom question. */
    private _questionId?: string | undefined;
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
     * Instantiates a new bookingQuestionAssignment and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
     * Gets the questionId property value. If it is mandatory to answer the custom question.
     * @returns a string
     */
    public get questionId() {
        return this._questionId;
    };
    /**
     * Sets the questionId property value. If it is mandatory to answer the custom question.
     * @param value Value to set for the questionId property.
     */
    public set questionId(value: string | undefined) {
        this._questionId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isRequired", this.isRequired);
        writer.writeStringValue("questionId", this.questionId);
        writer.writeAdditionalData(this.additionalData);
    };
}
