import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UriClickSecurityState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The clickAction property */
    private _clickAction?: string | undefined;
    /** The clickDateTime property */
    private _clickDateTime?: Date | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The sourceId property */
    private _sourceId?: string | undefined;
    /** The uriDomain property */
    private _uriDomain?: string | undefined;
    /** The verdict property */
    private _verdict?: string | undefined;
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
     * Gets the clickAction property value. The clickAction property
     * @returns a string
     */
    public get clickAction() {
        return this._clickAction;
    };
    /**
     * Sets the clickAction property value. The clickAction property
     * @param value Value to set for the clickAction property.
     */
    public set clickAction(value: string | undefined) {
        this._clickAction = value;
    };
    /**
     * Gets the clickDateTime property value. The clickDateTime property
     * @returns a Date
     */
    public get clickDateTime() {
        return this._clickDateTime;
    };
    /**
     * Sets the clickDateTime property value. The clickDateTime property
     * @param value Value to set for the clickDateTime property.
     */
    public set clickDateTime(value: Date | undefined) {
        this._clickDateTime = value;
    };
    /**
     * Instantiates a new uriClickSecurityState and sets the default values.
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
            "clickAction": n => { this.clickAction = n.getStringValue(); },
            "clickDateTime": n => { this.clickDateTime = n.getDateValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "sourceId": n => { this.sourceId = n.getStringValue(); },
            "uriDomain": n => { this.uriDomain = n.getStringValue(); },
            "verdict": n => { this.verdict = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("clickAction", this.clickAction);
        writer.writeDateValue("clickDateTime", this.clickDateTime);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("sourceId", this.sourceId);
        writer.writeStringValue("uriDomain", this.uriDomain);
        writer.writeStringValue("verdict", this.verdict);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceId property value. The sourceId property
     * @returns a string
     */
    public get sourceId() {
        return this._sourceId;
    };
    /**
     * Sets the sourceId property value. The sourceId property
     * @param value Value to set for the sourceId property.
     */
    public set sourceId(value: string | undefined) {
        this._sourceId = value;
    };
    /**
     * Gets the uriDomain property value. The uriDomain property
     * @returns a string
     */
    public get uriDomain() {
        return this._uriDomain;
    };
    /**
     * Sets the uriDomain property value. The uriDomain property
     * @param value Value to set for the uriDomain property.
     */
    public set uriDomain(value: string | undefined) {
        this._uriDomain = value;
    };
    /**
     * Gets the verdict property value. The verdict property
     * @returns a string
     */
    public get verdict() {
        return this._verdict;
    };
    /**
     * Sets the verdict property value. The verdict property
     * @param value Value to set for the verdict property.
     */
    public set verdict(value: string | undefined) {
        this._verdict = value;
    };
}
