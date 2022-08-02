import {createCertificationControlFromDiscriminatorValue} from './createCertificationControlFromDiscriminatorValue';
import {CertificationControl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ComplianceInformation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Collection of the certification controls associated with certification */
    private _certificationControls?: CertificationControl[] | undefined;
    /** Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171) */
    private _certificationName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
        this._additionalData = value;
    };
    /**
     * Gets the certificationControls property value. Collection of the certification controls associated with certification
     * @returns a certificationControl
     */
    public get certificationControls() {
        return this._certificationControls;
    };
    /**
     * Sets the certificationControls property value. Collection of the certification controls associated with certification
     * @param value Value to set for the certificationControls property.
     */
    public set certificationControls(value: CertificationControl[] | undefined) {
        this._certificationControls = value;
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
        this._certificationName = value;
    };
    /**
     * Instantiates a new complianceInformation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.complianceInformation";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificationControls": n => { this.certificationControls = n.getCollectionOfObjectValues<CertificationControl>(createCertificationControlFromDiscriminatorValue); },
            "certificationName": n => { this.certificationName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<CertificationControl>("certificationControls", this.certificationControls);
        writer.writeStringValue("certificationName", this.certificationName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
