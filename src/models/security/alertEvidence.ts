import {EvidenceRemediationStatus} from './evidenceRemediationStatus';
import {EvidenceRole} from './evidenceRole';
import {EvidenceVerdict} from './evidenceVerdict';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlertEvidence implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The time the evidence was created and added to the alert. */
    private _createdDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The remediationStatus property */
    private _remediationStatus?: EvidenceRemediationStatus | undefined;
    /** Details about the remediation status. */
    private _remediationStatusDetails?: string | undefined;
    /** The role/s that an evidence entity represents in an alert, e.g., an IP address that is associated with an attacker will have the evidence role 'Attacker'. */
    private _roles?: EvidenceRole[] | undefined;
    /** Array of custom tags associated with an evidence instance, for example to denote a group of devices, high value assets, etc. */
    private _tags?: string[] | undefined;
    /** The verdict property */
    private _verdict?: EvidenceVerdict | undefined;
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
     * Instantiates a new alertEvidence and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the createdDateTime property value. The time the evidence was created and added to the alert.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The time the evidence was created and added to the alert.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "remediationStatus": n => { this.remediationStatus = n.getEnumValue<EvidenceRemediationStatus>(EvidenceRemediationStatus); },
            "remediationStatusDetails": n => { this.remediationStatusDetails = n.getStringValue(); },
            "roles": n => { this.roles = n.getEnumValues<EvidenceRole>(EvidenceRole); },
            "tags": n => { this.tags = n.getCollectionOfPrimitiveValues<string>(); },
            "verdict": n => { this.verdict = n.getEnumValue<EvidenceVerdict>(EvidenceVerdict); },
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
     * Gets the remediationStatus property value. The remediationStatus property
     * @returns a evidenceRemediationStatus
     */
    public get remediationStatus() {
        return this._remediationStatus;
    };
    /**
     * Sets the remediationStatus property value. The remediationStatus property
     * @param value Value to set for the remediationStatus property.
     */
    public set remediationStatus(value: EvidenceRemediationStatus | undefined) {
        this._remediationStatus = value;
    };
    /**
     * Gets the remediationStatusDetails property value. Details about the remediation status.
     * @returns a string
     */
    public get remediationStatusDetails() {
        return this._remediationStatusDetails;
    };
    /**
     * Sets the remediationStatusDetails property value. Details about the remediation status.
     * @param value Value to set for the remediationStatusDetails property.
     */
    public set remediationStatusDetails(value: string | undefined) {
        this._remediationStatusDetails = value;
    };
    /**
     * Gets the roles property value. The role/s that an evidence entity represents in an alert, e.g., an IP address that is associated with an attacker will have the evidence role 'Attacker'.
     * @returns a evidenceRole
     */
    public get roles() {
        return this._roles;
    };
    /**
     * Sets the roles property value. The role/s that an evidence entity represents in an alert, e.g., an IP address that is associated with an attacker will have the evidence role 'Attacker'.
     * @param value Value to set for the roles property.
     */
    public set roles(value: EvidenceRole[] | undefined) {
        this._roles = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<EvidenceRemediationStatus>("remediationStatus", this.remediationStatus);
        writer.writeStringValue("remediationStatusDetails", this.remediationStatusDetails);
        this.roles && writer.writeEnumValue<EvidenceRole>("roles", ...this.roles);
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        writer.writeEnumValue<EvidenceVerdict>("verdict", this.verdict);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tags property value. Array of custom tags associated with an evidence instance, for example to denote a group of devices, high value assets, etc.
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. Array of custom tags associated with an evidence instance, for example to denote a group of devices, high value assets, etc.
     * @param value Value to set for the tags property.
     */
    public set tags(value: string[] | undefined) {
        this._tags = value;
    };
    /**
     * Gets the verdict property value. The verdict property
     * @returns a evidenceVerdict
     */
    public get verdict() {
        return this._verdict;
    };
    /**
     * Sets the verdict property value. The verdict property
     * @param value Value to set for the verdict property.
     */
    public set verdict(value: EvidenceVerdict | undefined) {
        this._verdict = value;
    };
}
