import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {EmailAddress} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Recipient implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The recipient's email address. */
    private _emailAddress?: EmailAddress | undefined;
    /** The type property */
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
     * Instantiates a new recipient and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the emailAddress property value. The recipient's email address.
     * @returns a emailAddress
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. The recipient's email address.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: EmailAddress | undefined) {
        this._emailAddress = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "emailAddress": n => { this.emailAddress = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
            "@odata.type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the @odata.type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<EmailAddress>("emailAddress", this.emailAddress);
        writer.writeStringValue("@odata.type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
}
