import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TopicModelingSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether the themes model should dynamically optimize the number of generated topics. To learn more, see Adjust maximum number of themes dynamically. */
    private _dynamicallyAdjustTopicCount?: boolean | undefined;
    /** Indicates whether the themes model should exclude numbers while parsing document texts. To learn more, see Include numbers in themes. */
    private _ignoreNumbers?: boolean | undefined;
    /** Indicates whether themes model is enabled for the case. */
    private _isEnabled?: boolean | undefined;
    private _odataType?: string | undefined;
    /** The total number of topics that the themes model will generate for a review set. To learn more, see Maximum number of themes. */
    private _topicCount?: number | undefined;
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
     * Instantiates a new topicModelingSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the dynamicallyAdjustTopicCount property value. Indicates whether the themes model should dynamically optimize the number of generated topics. To learn more, see Adjust maximum number of themes dynamically.
     * @returns a boolean
     */
    public get dynamicallyAdjustTopicCount() {
        return this._dynamicallyAdjustTopicCount;
    };
    /**
     * Sets the dynamicallyAdjustTopicCount property value. Indicates whether the themes model should dynamically optimize the number of generated topics. To learn more, see Adjust maximum number of themes dynamically.
     * @param value Value to set for the dynamicallyAdjustTopicCount property.
     */
    public set dynamicallyAdjustTopicCount(value: boolean | undefined) {
        this._dynamicallyAdjustTopicCount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dynamicallyAdjustTopicCount": n => { this.dynamicallyAdjustTopicCount = n.getBooleanValue(); },
            "ignoreNumbers": n => { this.ignoreNumbers = n.getBooleanValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "topicCount": n => { this.topicCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the ignoreNumbers property value. Indicates whether the themes model should exclude numbers while parsing document texts. To learn more, see Include numbers in themes.
     * @returns a boolean
     */
    public get ignoreNumbers() {
        return this._ignoreNumbers;
    };
    /**
     * Sets the ignoreNumbers property value. Indicates whether the themes model should exclude numbers while parsing document texts. To learn more, see Include numbers in themes.
     * @param value Value to set for the ignoreNumbers property.
     */
    public set ignoreNumbers(value: boolean | undefined) {
        this._ignoreNumbers = value;
    };
    /**
     * Gets the isEnabled property value. Indicates whether themes model is enabled for the case.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Indicates whether themes model is enabled for the case.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("dynamicallyAdjustTopicCount", this.dynamicallyAdjustTopicCount);
        writer.writeBooleanValue("ignoreNumbers", this.ignoreNumbers);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("topicCount", this.topicCount);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the topicCount property value. The total number of topics that the themes model will generate for a review set. To learn more, see Maximum number of themes.
     * @returns a integer
     */
    public get topicCount() {
        return this._topicCount;
    };
    /**
     * Sets the topicCount property value. The total number of topics that the themes model will generate for a review set. To learn more, see Maximum number of themes.
     * @param value Value to set for the topicCount property.
     */
    public set topicCount(value: number | undefined) {
        this._topicCount = value;
    };
}
