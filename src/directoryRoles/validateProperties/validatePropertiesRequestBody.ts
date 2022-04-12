import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the validateProperties method.  */
export class ValidatePropertiesRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The displayName property  */
    private _displayName?: string | undefined;
    /** The entityType property  */
    private _entityType?: string | undefined;
    /** The mailNickname property  */
    private _mailNickname?: string | undefined;
    /** The onBehalfOfUserId property  */
    private _onBehalfOfUserId?: string | undefined;
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
     * Instantiates a new validatePropertiesRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the entityType property value. The entityType property
     * @returns a string
     */
    public get entityType() {
        return this._entityType;
    };
    /**
     * Sets the entityType property value. The entityType property
     * @param value Value to set for the entityType property.
     */
    public set entityType(value: string | undefined) {
        this._entityType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "entityType": n => { this.entityType = n.getStringValue(); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "onBehalfOfUserId": n => { this.onBehalfOfUserId = n.getStringValue(); },
        };
    };
    /**
     * Gets the mailNickname property value. The mailNickname property
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. The mailNickname property
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Gets the onBehalfOfUserId property value. The onBehalfOfUserId property
     * @returns a string
     */
    public get onBehalfOfUserId() {
        return this._onBehalfOfUserId;
    };
    /**
     * Sets the onBehalfOfUserId property value. The onBehalfOfUserId property
     * @param value Value to set for the onBehalfOfUserId property.
     */
    public set onBehalfOfUserId(value: string | undefined) {
        this._onBehalfOfUserId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("entityType", this.entityType);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeStringValue("onBehalfOfUserId", this.onBehalfOfUserId);
        writer.writeAdditionalData(this.additionalData);
    };
}
