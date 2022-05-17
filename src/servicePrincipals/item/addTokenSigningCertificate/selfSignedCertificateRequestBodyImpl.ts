import {SelfSignedCertificateRequestBody} from './selfSignedCertificateRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addTokenSigningCertificate method. */
export class SelfSignedCertificateRequestBodyImpl implements AdditionalDataHolder, Parsable, SelfSignedCertificateRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The displayName property */
    displayName?: string | undefined;
    /** The endDateTime property */
    endDateTime?: Date | undefined;
    /**
     * Instantiates a new SelfSignedCertificateRequestBody and sets the default values.
     * @param selfSignedCertificateRequestBodyParameterValue 
     */
    public constructor(selfSignedCertificateRequestBodyParameterValue?: SelfSignedCertificateRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = selfSignedCertificateRequestBodyParameterValue?.additionalData ? {} : selfSignedCertificateRequestBodyParameterValue?.additionalData!
        this.displayName = selfSignedCertificateRequestBodyParameterValue?.displayName ;
        this.endDateTime = selfSignedCertificateRequestBodyParameterValue?.endDateTime ;
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
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.endDateTime){
        if(this.endDateTime)
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
