import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossTenantAccessPolicyInboundTrust implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Specifies whether compliant devices from external Azure AD organizations are trusted. */
    private _isCompliantDeviceAccepted?: boolean | undefined;
    /** Specifies whether hybrid Azure AD joined devices from external Azure AD organizations are trusted. */
    private _isHybridAzureADJoinedDeviceAccepted?: boolean | undefined;
    /** Specifies whether MFA from external Azure AD organizations is trusted. */
    private _isMfaAccepted?: boolean | undefined;
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
     * Instantiates a new crossTenantAccessPolicyInboundTrust and sets the default values.
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
            "isCompliantDeviceAccepted": n => { this.isCompliantDeviceAccepted = n.getBooleanValue(); },
            "isHybridAzureADJoinedDeviceAccepted": n => { this.isHybridAzureADJoinedDeviceAccepted = n.getBooleanValue(); },
            "isMfaAccepted": n => { this.isMfaAccepted = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isCompliantDeviceAccepted property value. Specifies whether compliant devices from external Azure AD organizations are trusted.
     * @returns a boolean
     */
    public get isCompliantDeviceAccepted() {
        return this._isCompliantDeviceAccepted;
    };
    /**
     * Sets the isCompliantDeviceAccepted property value. Specifies whether compliant devices from external Azure AD organizations are trusted.
     * @param value Value to set for the isCompliantDeviceAccepted property.
     */
    public set isCompliantDeviceAccepted(value: boolean | undefined) {
        this._isCompliantDeviceAccepted = value;
    };
    /**
     * Gets the isHybridAzureADJoinedDeviceAccepted property value. Specifies whether hybrid Azure AD joined devices from external Azure AD organizations are trusted.
     * @returns a boolean
     */
    public get isHybridAzureADJoinedDeviceAccepted() {
        return this._isHybridAzureADJoinedDeviceAccepted;
    };
    /**
     * Sets the isHybridAzureADJoinedDeviceAccepted property value. Specifies whether hybrid Azure AD joined devices from external Azure AD organizations are trusted.
     * @param value Value to set for the isHybridAzureADJoinedDeviceAccepted property.
     */
    public set isHybridAzureADJoinedDeviceAccepted(value: boolean | undefined) {
        this._isHybridAzureADJoinedDeviceAccepted = value;
    };
    /**
     * Gets the isMfaAccepted property value. Specifies whether MFA from external Azure AD organizations is trusted.
     * @returns a boolean
     */
    public get isMfaAccepted() {
        return this._isMfaAccepted;
    };
    /**
     * Sets the isMfaAccepted property value. Specifies whether MFA from external Azure AD organizations is trusted.
     * @param value Value to set for the isMfaAccepted property.
     */
    public set isMfaAccepted(value: boolean | undefined) {
        this._isMfaAccepted = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isCompliantDeviceAccepted", this.isCompliantDeviceAccepted);
        writer.writeBooleanValue("isHybridAzureADJoinedDeviceAccepted", this.isHybridAzureADJoinedDeviceAccepted);
        writer.writeBooleanValue("isMfaAccepted", this.isMfaAccepted);
        writer.writeAdditionalData(this.additionalData);
    };
}
