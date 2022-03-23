import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the changePassword method.  */
export class ChangePasswordRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _currentPassword?: string | undefined;
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
     * Instantiates a new changePasswordRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the currentPassword property value. 
     * @returns a string
     */
    public get currentPassword() {
        return this._currentPassword;
    };
    /**
     * Sets the currentPassword property value. 
     * @param value Value to set for the currentPassword property.
     */
    public set currentPassword(value: string | undefined) {
        this._currentPassword = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "currentPassword": (o, n) => { (o as unknown as ChangePasswordRequestBody).currentPassword = n.getStringValue(); },
            "newPassword": (o, n) => { (o as unknown as ChangePasswordRequestBody).newPassword = n.getStringValue(); },
        };
    };
    /**
     * Gets the newPassword property value. 
     * @returns a string
     */
    public get newPassword() {
        return this._newPassword;
    };
    /**
     * Sets the newPassword property value. 
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
