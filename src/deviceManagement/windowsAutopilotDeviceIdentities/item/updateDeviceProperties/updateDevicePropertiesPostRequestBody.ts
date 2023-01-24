import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UpdateDevicePropertiesPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The addressableUserName property */
    private _addressableUserName?: string | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The groupTag property */
    private _groupTag?: string | undefined;
    /** The userPrincipalName property */
    private _userPrincipalName?: string | undefined;
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
     * Gets the addressableUserName property value. The addressableUserName property
     * @returns a string
     */
    public get addressableUserName() {
        return this._addressableUserName;
    };
    /**
     * Sets the addressableUserName property value. The addressableUserName property
     * @param value Value to set for the addressableUserName property.
     */
    public set addressableUserName(value: string | undefined) {
        this._addressableUserName = value;
    };
    /**
     * Instantiates a new updateDevicePropertiesPostRequestBody and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "addressableUserName": n => { this.addressableUserName = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "groupTag": n => { this.groupTag = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the groupTag property value. The groupTag property
     * @returns a string
     */
    public get groupTag() {
        return this._groupTag;
    };
    /**
     * Sets the groupTag property value. The groupTag property
     * @param value Value to set for the groupTag property.
     */
    public set groupTag(value: string | undefined) {
        this._groupTag = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("addressableUserName", this.addressableUserName);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("groupTag", this.groupTag);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userPrincipalName property value. The userPrincipalName property
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The userPrincipalName property
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
