import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveRecipient implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The alias of the domain object, for cases where an email address is unavailable (e.g. security groups).  */
    private _alias?: string | undefined;
    /** The email address for the recipient, if the recipient has an associated email address.  */
    private _email?: string | undefined;
    /** The unique identifier for the recipient in the directory.  */
    private _objectId?: string | undefined;
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
     * Gets the alias property value. The alias of the domain object, for cases where an email address is unavailable (e.g. security groups).
     * @returns a string
     */
    public get alias() {
        return this._alias;
    };
    /**
     * Sets the alias property value. The alias of the domain object, for cases where an email address is unavailable (e.g. security groups).
     * @param value Value to set for the alias property.
     */
    public set alias(value: string | undefined) {
        this._alias = value;
    };
    /**
     * Instantiates a new driveRecipient and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the email property value. The email address for the recipient, if the recipient has an associated email address.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. The email address for the recipient, if the recipient has an associated email address.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        this._email = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "alias": n => { this.alias = n.getStringValue(); },
            "email": n => { this.email = n.getStringValue(); },
            "objectId": n => { this.objectId = n.getStringValue(); },
        };
    };
    /**
     * Gets the objectId property value. The unique identifier for the recipient in the directory.
     * @returns a string
     */
    public get objectId() {
        return this._objectId;
    };
    /**
     * Sets the objectId property value. The unique identifier for the recipient in the directory.
     * @param value Value to set for the objectId property.
     */
    public set objectId(value: string | undefined) {
        this._objectId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("alias", this.alias);
        writer.writeStringValue("email", this.email);
        writer.writeStringValue("objectId", this.objectId);
        writer.writeAdditionalData(this.additionalData);
    };
}
