import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the changePassword method. */
export class ChangePasswordPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The currentPassword property */
    private _currentPassword?: string | undefined;
    /** The newPassword property */
    private _newPassword?: string | undefined;
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
     * Instantiates a new changePasswordPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the currentPassword property value. The currentPassword property
     * @returns a string
     */
    public get currentPassword() {
        return this._currentPassword;
    };
    /**
     * Sets the currentPassword property value. The currentPassword property
     * @param value Value to set for the currentPassword property.
     */
    public set currentPassword(value: string | undefined) {
        this._currentPassword = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "currentPassword": n => { this.currentPassword = n.getStringValue(); },
            "newPassword": n => { this.newPassword = n.getStringValue(); },
        };
    };
    /**
     * Gets the newPassword property value. The newPassword property
     * @returns a string
     */
    public get newPassword() {
        return this._newPassword;
    };
    /**
     * Sets the newPassword property value. The newPassword property
     * @param value Value to set for the newPassword property.
     */
    public set newPassword(value: string | undefined) {
        this._newPassword = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("currentPassword", this.currentPassword);
        writer.writeStringValue("newPassword", this.newPassword);
        writer.writeAdditionalData(this.additionalData);
    };
}
