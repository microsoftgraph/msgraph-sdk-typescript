import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the validatePermission method.  */
export class ValidatePermissionRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The challengeToken property  */
    private _challengeToken?: string | undefined;
    /** The password property  */
    private _password?: string | undefined;
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
     * Gets the challengeToken property value. The challengeToken property
     * @returns a string
     */
    public get challengeToken() {
        return this._challengeToken;
    };
    /**
     * Sets the challengeToken property value. The challengeToken property
     * @param value Value to set for the challengeToken property.
     */
    public set challengeToken(value: string | undefined) {
        this._challengeToken = value;
    };
    /**
     * Instantiates a new validatePermissionRequestBody and sets the default values.
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
            "challengeToken": n => { this.challengeToken = n.getStringValue(); },
            "password": n => { this.password = n.getStringValue(); },
        };
    };
    /**
     * Gets the password property value. The password property
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. The password property
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("challengeToken", this.challengeToken);
        writer.writeStringValue("password", this.password);
        writer.writeAdditionalData(this.additionalData);
    };
}
