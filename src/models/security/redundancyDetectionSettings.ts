import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RedundancyDetectionSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether email threading and near duplicate detection are enabled. */
    private _isEnabled?: boolean | undefined;
    /** Specifies the maximum number of words used for email threading and near duplicate detection. To learn more, see Minimum/maximum number of words. */
    private _maxWords?: number | undefined;
    /** Specifies the minimum number of words used for email threading and near duplicate detection. To learn more, see Minimum/maximum number of words. */
    private _minWords?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Specifies the similarity level for documents to be put in the same near duplicate set. To learn more, see Document and email similarity threshold. */
    private _similarityThreshold?: number | undefined;
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
     * Instantiates a new redundancyDetectionSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.security.redundancyDetectionSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "maxWords": n => { this.maxWords = n.getNumberValue(); },
            "minWords": n => { this.minWords = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "similarityThreshold": n => { this.similarityThreshold = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isEnabled property value. Indicates whether email threading and near duplicate detection are enabled.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Indicates whether email threading and near duplicate detection are enabled.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Gets the maxWords property value. Specifies the maximum number of words used for email threading and near duplicate detection. To learn more, see Minimum/maximum number of words.
     * @returns a integer
     */
    public get maxWords() {
        return this._maxWords;
    };
    /**
     * Sets the maxWords property value. Specifies the maximum number of words used for email threading and near duplicate detection. To learn more, see Minimum/maximum number of words.
     * @param value Value to set for the maxWords property.
     */
    public set maxWords(value: number | undefined) {
        this._maxWords = value;
    };
    /**
     * Gets the minWords property value. Specifies the minimum number of words used for email threading and near duplicate detection. To learn more, see Minimum/maximum number of words.
     * @returns a integer
     */
    public get minWords() {
        return this._minWords;
    };
    /**
     * Sets the minWords property value. Specifies the minimum number of words used for email threading and near duplicate detection. To learn more, see Minimum/maximum number of words.
     * @param value Value to set for the minWords property.
     */
    public set minWords(value: number | undefined) {
        this._minWords = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeNumberValue("maxWords", this.maxWords);
        writer.writeNumberValue("minWords", this.minWords);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("similarityThreshold", this.similarityThreshold);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the similarityThreshold property value. Specifies the similarity level for documents to be put in the same near duplicate set. To learn more, see Document and email similarity threshold.
     * @returns a integer
     */
    public get similarityThreshold() {
        return this._similarityThreshold;
    };
    /**
     * Sets the similarityThreshold property value. Specifies the similarity level for documents to be put in the same near duplicate set. To learn more, see Document and email similarity threshold.
     * @param value Value to set for the similarityThreshold property.
     */
    public set similarityThreshold(value: number | undefined) {
        this._similarityThreshold = value;
    };
}
