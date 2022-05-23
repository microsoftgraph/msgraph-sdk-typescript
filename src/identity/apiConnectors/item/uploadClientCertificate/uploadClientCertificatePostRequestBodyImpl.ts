import {UploadClientCertificatePostRequestBody} from './uploadClientCertificatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the uploadClientCertificate method. */
export class UploadClientCertificatePostRequestBodyImpl implements AdditionalDataHolder, Parsable, UploadClientCertificatePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The password property */
    public password?: string | undefined;
    /** The pkcs12Value property */
    public pkcs12Value?: string | undefined;
    /**
     * Instantiates a new uploadClientCertificatePostRequestBody and sets the default values.
     * @param uploadClientCertificatePostRequestBodyParameterValue 
     */
    public constructor(uploadClientCertificatePostRequestBodyParameterValue?: UploadClientCertificatePostRequestBody | undefined) {
        this.additionalData = uploadClientCertificatePostRequestBodyParameterValue?.additionalData ? uploadClientCertificatePostRequestBodyParameterValue?.additionalData! : {}
        this.password = uploadClientCertificatePostRequestBodyParameterValue?.password ;
        this.pkcs12Value = uploadClientCertificatePostRequestBodyParameterValue?.pkcs12Value ;
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
        writer.writeStringValue("password", this.password);
        }
        if(this.pkcs12Value){
        writer.writeStringValue("pkcs12Value", this.pkcs12Value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
