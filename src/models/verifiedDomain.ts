import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VerifiedDomain implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** For example, Email, OfficeCommunicationsOnline. */
    private _capabilities?: string | undefined;
    /** true if this is the default domain associated with the tenant; otherwise, false. */
    private _isDefault?: boolean | undefined;
    /** true if this is the initial domain associated with the tenant; otherwise, false. */
    private _isInitial?: boolean | undefined;
    /** The domain name; for example, contoso.onmicrosoft.com. */
    private _name?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** For example, Managed. */
    private _type?: string | undefined;
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
     * Gets the capabilities property value. For example, Email, OfficeCommunicationsOnline.
     * @returns a string
     */
    public get capabilities() {
        return this._capabilities;
    };
    /**
     * Sets the capabilities property value. For example, Email, OfficeCommunicationsOnline.
     * @param value Value to set for the capabilities property.
     */
    public set capabilities(value: string | undefined) {
        this._capabilities = value;
    };
    /**
     * Instantiates a new verifiedDomain and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.verifiedDomain";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "capabilities": n => { this.capabilities = n.getStringValue(); },
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "isInitial": n => { this.isInitial = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the isDefault property value. true if this is the default domain associated with the tenant; otherwise, false.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. true if this is the default domain associated with the tenant; otherwise, false.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Gets the isInitial property value. true if this is the initial domain associated with the tenant; otherwise, false.
     * @returns a boolean
     */
    public get isInitial() {
        return this._isInitial;
    };
    /**
     * Sets the isInitial property value. true if this is the initial domain associated with the tenant; otherwise, false.
     * @param value Value to set for the isInitial property.
     */
    public set isInitial(value: boolean | undefined) {
        this._isInitial = value;
    };
    /**
     * Gets the name property value. The domain name; for example, contoso.onmicrosoft.com.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The domain name; for example, contoso.onmicrosoft.com.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
        writer.writeStringValue("capabilities", this.capabilities);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isInitial", this.isInitial);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. For example, Managed.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. For example, Managed.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
