import {ApiAuthenticationConfigurationBaseImpl} from './index';
import {Pkcs12Certificate} from './pkcs12Certificate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Pkcs12CertificateImpl extends ApiAuthenticationConfigurationBaseImpl implements Pkcs12Certificate {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** This is the password for the pfx file. Required. If no password is used, must still provide a value of ''. */
    public password?: string | undefined;
    /** This is the field for sending pfx content. The value should be a base-64 encoded version of the actual certificate content. Required. */
    public pkcs12Value?: string | undefined;
    /**
     * Instantiates a new Pkcs12Certificate and sets the default values.
     * @param pkcs12CertificateParameterValue 
     */
    public constructor(pkcs12CertificateParameterValue?: Pkcs12Certificate | undefined) {
        super(pkcs12CertificateParameterValue);
        this.additionalData = pkcs12CertificateParameterValue?.additionalData ? pkcs12CertificateParameterValue?.additionalData! : {};
        this.password = pkcs12CertificateParameterValue?.password;
        this.pkcs12Value = pkcs12CertificateParameterValue?.pkcs12Value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "password": n => { this.password = n.getStringValue(); },
            "pkcs12Value": n => { this.pkcs12Value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.password){
            writer.writeStringValue("password", this.password);
        }
        if(this.pkcs12Value){
            writer.writeStringValue("pkcs12Value", this.pkcs12Value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
