import {SelfSignedCertificatePostRequestBody} from './selfSignedCertificatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addTokenSigningCertificate method. */
export class SelfSignedCertificatePostRequestBodyImpl implements AdditionalDataHolder, Parsable, SelfSignedCertificatePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The displayName property */
    public displayName?: string | undefined;
    /** The endDateTime property */
    public endDateTime?: Date | undefined;
    /**
     * Instantiates a new SelfSignedCertificatePostRequestBody and sets the default values.
     * @param selfSignedCertificatePostRequestBodyParameterValue 
     */
    public constructor(selfSignedCertificatePostRequestBodyParameterValue?: SelfSignedCertificatePostRequestBody | undefined) {
        this.additionalData = selfSignedCertificatePostRequestBodyParameterValue?.additionalData ? selfSignedCertificatePostRequestBodyParameterValue?.additionalData! : {}
        this.displayName = selfSignedCertificatePostRequestBodyParameterValue?.displayName ;
        this.endDateTime = selfSignedCertificatePostRequestBodyParameterValue?.endDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
