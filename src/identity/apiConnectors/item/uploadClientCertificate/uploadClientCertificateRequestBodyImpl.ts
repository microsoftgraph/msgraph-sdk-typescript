import {UploadClientCertificateRequestBody} from './uploadClientCertificateRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the uploadClientCertificate method.  */
export class UploadClientCertificateRequestBodyImpl implements AdditionalDataHolder, Parsable, UploadClientCertificateRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The password property  */
    password?: string | undefined;
    /** The pkcs12Value property  */
    pkcs12Value?: string | undefined;
    /**
     * Instantiates a new uploadClientCertificateRequestBody and sets the default values.
     * @param uploadClientCertificateRequestBodyParameterValue 
     */
    public constructor(uploadClientCertificateRequestBodyParameterValue?: UploadClientCertificateRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = uploadClientCertificateRequestBodyParameterValue?.additionalData ? {} : uploadClientCertificateRequestBodyParameterValue?.additionalData!
        this.password = uploadClientCertificateRequestBodyParameterValue?.password ;
        this.pkcs12Value = uploadClientCertificateRequestBodyParameterValue?.pkcs12Value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
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
        if(this.password){
        if(this.password)
        writer.writeStringValue("password", this.password);
        }
        if(this.pkcs12Value){
        if(this.pkcs12Value)
        writer.writeStringValue("pkcs12Value", this.pkcs12Value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
