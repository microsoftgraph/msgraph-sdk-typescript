import {CertificationControl} from './certificationControl';
import {ComplianceInformation} from './complianceInformation';
import {createCertificationControlFromDiscriminatorValue} from './createCertificationControlFromDiscriminatorValue';
import {CertificationControlImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ComplianceInformationImpl implements AdditionalDataHolder, ComplianceInformation, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Collection of the certification controls associated with certification */
    public certificationControls?: CertificationControl[] | undefined;
    /** Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171) */
    public certificationName?: string | undefined;
    /**
     * Instantiates a new complianceInformation and sets the default values.
     * @param complianceInformationParameterValue 
     */
    public constructor(complianceInformationParameterValue?: ComplianceInformation | undefined) {
        this.additionalData = complianceInformationParameterValue?.additionalData ? complianceInformationParameterValue?.additionalData! : {}
        this.certificationControls = complianceInformationParameterValue?.certificationControls ;
        this.certificationName = complianceInformationParameterValue?.certificationName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificationControls": n => { this.certificationControls = n.getCollectionOfObjectValues<CertificationControlImpl>(createCertificationControlFromDiscriminatorValue); },
            "certificationName": n => { this.certificationName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.certificationControls && this.certificationControls.length != 0){        const certificationControlsArrValue: CertificationControlImpl[] = []; this.certificationControls?.forEach(element => {certificationControlsArrValue.push(new CertificationControlImpl(element));});
        writer.writeCollectionOfObjectValues<CertificationControlImpl>("certificationControls", certificationControlsArrValue);
        }
        if(this.certificationName){
        writer.writeStringValue("certificationName", this.certificationName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
