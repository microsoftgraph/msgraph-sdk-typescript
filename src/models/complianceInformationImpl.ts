import {CertificationControl} from './certificationControl';
import {ComplianceInformation} from './complianceInformation';
import {createCertificationControlFromDiscriminatorValue} from './createCertificationControlFromDiscriminatorValue';
import {CertificationControlImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ComplianceInformationImpl implements ComplianceInformation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Collection of the certification controls associated with certification */
    private _certificationControls?: CertificationControl[] | undefined;
    /** Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171) */
    private _certificationName?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the certificationControls property value. Collection of the certification controls associated with certification
     * @returns a CertificationControlInterface
     */
    public get certificationControls() {
        return this._certificationControls;
    };
    /**
     * Sets the certificationControls property value. Collection of the certification controls associated with certification
     * @param value Value to set for the certificationControls property.
     */
    public set certificationControls(value: CertificationControl[] | undefined) {
        if(value) {
            const certificationControlsArrValue: CertificationControlImpl[] = [];
            this.certificationControls?.forEach(element => {
                certificationControlsArrValue.push((element instanceof CertificationControlImpl? element:new CertificationControlImpl(element)));
            });
            this._certificationControls = certificationControlsArrValue;
        }
    };
    /**
     * Gets the certificationName property value. Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171)
     * @returns a string
     */
    public get certificationName() {
        return this._certificationName;
    };
    /**
     * Sets the certificationName property value. Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171)
     * @param value Value to set for the certificationName property.
     */
    public set certificationName(value: string | undefined) {
        if(value) {
            this._certificationName = value;
        }
    };
    /**
     * Instantiates a new complianceInformation and sets the default values.
     * @param complianceInformationParameterValue 
     */
    public constructor(complianceInformationParameterValue?: ComplianceInformation | undefined) {
        this._additionalData = complianceInformationParameterValue?.additionalData ? complianceInformationParameterValue?.additionalData! : {};
        this._certificationControls = complianceInformationParameterValue?.certificationControls;
        this._certificationName = complianceInformationParameterValue?.certificationName;
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
        if(this.certificationControls && this.certificationControls.length != 0){        const certificationControlsArrValue: CertificationControlImpl[] = [];
        this.certificationControls?.forEach(element => {
            certificationControlsArrValue.push((element instanceof CertificationControlImpl? element:new CertificationControlImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CertificationControlImpl>("certificationControls", certificationControlsArrValue);
        }
        if(this.certificationName){
            writer.writeStringValue("certificationName", this.certificationName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
