import {ProvisionChannelEmailResult} from './provisionChannelEmailResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisionChannelEmailResultImpl implements ProvisionChannelEmailResult {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Represents the provisioned email address. */
    private _email?: string | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new ProvisionChannelEmailResult and sets the default values.
     * @param provisionChannelEmailResultParameterValue 
     */
    public constructor(provisionChannelEmailResultParameterValue?: ProvisionChannelEmailResult | undefined) {
        this._additionalData = provisionChannelEmailResultParameterValue?.additionalData ? provisionChannelEmailResultParameterValue?.additionalData! : {};
        this._email = provisionChannelEmailResultParameterValue?.email;
    };
    /**
     * Gets the email property value. Represents the provisioned email address.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. Represents the provisioned email address.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        if(value) {
            this._email = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "email": n => { this.email = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.email){
            writer.writeStringValue("email", this.email);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
