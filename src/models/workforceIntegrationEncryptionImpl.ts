import {WorkforceIntegrationEncryption} from './workforceIntegrationEncryption';
import {WorkforceIntegrationEncryptionProtocol} from './workforceIntegrationEncryptionProtocol';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkforceIntegrationEncryptionImpl implements AdditionalDataHolder, Parsable, WorkforceIntegrationEncryption {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Possible values are: sharedSecret, unknownFutureValue. */
    public protocol?: WorkforceIntegrationEncryptionProtocol | undefined;
    /** Encryption shared secret. */
    public secret?: string | undefined;
    /**
     * Instantiates a new workforceIntegrationEncryption and sets the default values.
     * @param workforceIntegrationEncryptionParameterValue 
     */
    public constructor(workforceIntegrationEncryptionParameterValue?: WorkforceIntegrationEncryption | undefined) {
        this.additionalData = workforceIntegrationEncryptionParameterValue?.additionalData ? workforceIntegrationEncryptionParameterValue?.additionalData! : {}
        this.protocol = workforceIntegrationEncryptionParameterValue?.protocol ;
        this.secret = workforceIntegrationEncryptionParameterValue?.secret ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "protocol": n => { this.protocol = n.getEnumValue<WorkforceIntegrationEncryptionProtocol>(WorkforceIntegrationEncryptionProtocol); },
            "secret": n => { this.secret = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.protocol){
        writer.writeEnumValue<WorkforceIntegrationEncryptionProtocol>("protocol", this.protocol);
        }
        if(this.secret){
        writer.writeStringValue("secret", this.secret);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
