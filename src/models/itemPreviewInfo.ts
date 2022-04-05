import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemPreviewInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The getUrl property  */
    private _getUrl?: string | undefined;
    /** The postParameters property  */
    private _postParameters?: string | undefined;
    /** The postUrl property  */
    private _postUrl?: string | undefined;
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
     * Instantiates a new itemPreviewInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "getUrl": (o, n) => { (o as unknown as ItemPreviewInfo).getUrl = n.getStringValue(); },
            "postParameters": (o, n) => { (o as unknown as ItemPreviewInfo).postParameters = n.getStringValue(); },
            "postUrl": (o, n) => { (o as unknown as ItemPreviewInfo).postUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the getUrl property value. The getUrl property
     * @returns a string
     */
    public get getUrl() {
        return this._getUrl;
    };
    /**
     * Sets the getUrl property value. The getUrl property
     * @param value Value to set for the getUrl property.
     */
    public set getUrl(value: string | undefined) {
        this._getUrl = value;
    };
    /**
     * Gets the postParameters property value. The postParameters property
     * @returns a string
     */
    public get postParameters() {
        return this._postParameters;
    };
    /**
     * Sets the postParameters property value. The postParameters property
     * @param value Value to set for the postParameters property.
     */
    public set postParameters(value: string | undefined) {
        this._postParameters = value;
    };
    /**
     * Gets the postUrl property value. The postUrl property
     * @returns a string
     */
    public get postUrl() {
        return this._postUrl;
    };
    /**
     * Sets the postUrl property value. The postUrl property
     * @param value Value to set for the postUrl property.
     */
    public set postUrl(value: string | undefined) {
        this._postUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("getUrl", this.getUrl);
        writer.writeStringValue("postParameters", this.postParameters);
        writer.writeStringValue("postUrl", this.postUrl);
        writer.writeAdditionalData(this.additionalData);
    };
}
