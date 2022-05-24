import {SelfSignedCertificate} from './selfSignedCertificate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SelfSignedCertificateImpl implements AdditionalDataHolder, Parsable, SelfSignedCertificate {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Custom key identifier. */
    public customKeyIdentifier?: string | undefined;
    /** The friendly name for the key. */
    public displayName?: string | undefined;
    /** The date and time at which the credential expires. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public endDateTime?: Date | undefined;
    /** The value for the key credential. Should be a base-64 encoded value. */
    public key?: string | undefined;
    /** The unique identifier (GUID) for the key. */
    public keyId?: string | undefined;
    /** The date and time at which the credential becomes valid. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public startDateTime?: Date | undefined;
    /** The thumbprint value for the key. */
    public thumbprint?: string | undefined;
    /** The type of key credential. 'AsymmetricX509Cert'. */
    public type?: string | undefined;
    /** A string that describes the purpose for which the key can be used. For example, 'Verify'. */
    public usage?: string | undefined;
    /**
     * Instantiates a new SelfSignedCertificate and sets the default values.
     * @param selfSignedCertificateParameterValue 
     */
    public constructor(selfSignedCertificateParameterValue?: SelfSignedCertificate | undefined) {
        this.additionalData = selfSignedCertificateParameterValue?.additionalData ? selfSignedCertificateParameterValue?.additionalData! : {}
        this.customKeyIdentifier = selfSignedCertificateParameterValue?.customKeyIdentifier ;
        this.displayName = selfSignedCertificateParameterValue?.displayName ;
        this.endDateTime = selfSignedCertificateParameterValue?.endDateTime ;
        this.key = selfSignedCertificateParameterValue?.key ;
        this.keyId = selfSignedCertificateParameterValue?.keyId ;
        this.startDateTime = selfSignedCertificateParameterValue?.startDateTime ;
        this.thumbprint = selfSignedCertificateParameterValue?.thumbprint ;
        this.type = selfSignedCertificateParameterValue?.type ;
        this.usage = selfSignedCertificateParameterValue?.usage ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "customKeyIdentifier": n => { this.customKeyIdentifier = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "key": n => { this.key = n.getStringValue(); },
            "keyId": n => { this.keyId = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "thumbprint": n => { this.thumbprint = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "usage": n => { this.usage = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.customKeyIdentifier){
        writer.writeStringValue("customKeyIdentifier", this.customKeyIdentifier);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.key){
        writer.writeStringValue("key", this.key);
        }
        if(this.keyId){
        writer.writeStringValue("keyId", this.keyId);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.thumbprint){
        writer.writeStringValue("thumbprint", this.thumbprint);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        if(this.usage){
        writer.writeStringValue("usage", this.usage);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
