import {Certification} from './certification';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificationImpl implements Certification {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** URL that shows certification details for the application. */
    public certificationDetailsUrl?: string | undefined;
    /** The timestamp when the current certification for the application will expire. */
    public certificationExpirationDateTime?: Date | undefined;
    /** Indicates whether the application is certified by Microsoft. */
    public isCertifiedByMicrosoft?: boolean | undefined;
    /** Indicates whether the application has been self-attested by the application developer or the publisher. */
    public isPublisherAttested?: boolean | undefined;
    /** The timestamp when the certification for the application was most recently added or updated. */
    public lastCertificationDateTime?: Date | undefined;
    /**
     * Instantiates a new certification and sets the default values.
     * @param certificationParameterValue 
     */
    public constructor(certificationParameterValue?: Certification | undefined) {
        this.additionalData = certificationParameterValue?.additionalData ? certificationParameterValue?.additionalData! : {};
        this.certificationDetailsUrl = certificationParameterValue?.certificationDetailsUrl;
        this.certificationExpirationDateTime = certificationParameterValue?.certificationExpirationDateTime;
        this.isCertifiedByMicrosoft = certificationParameterValue?.isCertifiedByMicrosoft;
        this.isPublisherAttested = certificationParameterValue?.isPublisherAttested;
        this.lastCertificationDateTime = certificationParameterValue?.lastCertificationDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificationDetailsUrl": n => { this.certificationDetailsUrl = n.getStringValue(); },
            "certificationExpirationDateTime": n => { this.certificationExpirationDateTime = n.getDateValue(); },
            "isCertifiedByMicrosoft": n => { this.isCertifiedByMicrosoft = n.getBooleanValue(); },
            "isPublisherAttested": n => { this.isPublisherAttested = n.getBooleanValue(); },
            "lastCertificationDateTime": n => { this.lastCertificationDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.certificationDetailsUrl){
            writer.writeStringValue("certificationDetailsUrl", this.certificationDetailsUrl);
        }
        if(this.certificationExpirationDateTime){
            writer.writeDateValue("certificationExpirationDateTime", this.certificationExpirationDateTime);
        }
        if(this.isCertifiedByMicrosoft){
            writer.writeBooleanValue("isCertifiedByMicrosoft", this.isCertifiedByMicrosoft);
        }
        if(this.isPublisherAttested){
            writer.writeBooleanValue("isPublisherAttested", this.isPublisherAttested);
        }
        if(this.lastCertificationDateTime){
            writer.writeDateValue("lastCertificationDateTime", this.lastCertificationDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
