import {createEmailIdentityFromDiscriminatorValue} from './createEmailIdentityFromDiscriminatorValue';
import {createSimulationReportFromDiscriminatorValue} from './createSimulationReportFromDiscriminatorValue';
import {EmailIdentity, Entity, SimulationReport} from './index';
import {PayloadDeliveryPlatform} from './payloadDeliveryPlatform';
import {SimulationAttackTechnique} from './simulationAttackTechnique';
import {SimulationAttackType} from './simulationAttackType';
import {SimulationStatus} from './simulationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class Simulation extends Entity implements Parsable {
    /** The social engineering technique used in the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, credentialHarvesting, attachmentMalware, driveByUrl, linkInAttachment, linkToMalwareFile, unknownFutureValue. For more information on the types of social engineering attack techniques, see simulations. */
    private _attackTechnique?: SimulationAttackTechnique | undefined;
    /** Attack type of the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, social, cloud, endpoint, unknownFutureValue. */
    private _attackType?: SimulationAttackType | undefined;
    /** Unique identifier for the attack simulation automation. */
    private _automationId?: string | undefined;
    /** Date and time of completion of the attack simulation and training campaign. Supports $filter and $orderby. */
    private _completionDateTime?: Date | undefined;
    /** Identity of the user who created the attack simulation and training campaign. */
    private _createdBy?: EmailIdentity | undefined;
    /** Date and time of creation of the attack simulation and training campaign. */
    private _createdDateTime?: Date | undefined;
    /** Description of the attack simulation and training campaign. */
    private _description?: string | undefined;
    /** Display name of the attack simulation and training campaign. Supports $filter and $orderby. */
    private _displayName?: string | undefined;
    /** Flag that represents if the attack simulation and training campaign was created from a simulation automation flow. Supports $filter and $orderby. */
    private _isAutomated?: boolean | undefined;
    /** Identity of the user who most recently modified the attack simulation and training campaign. */
    private _lastModifiedBy?: EmailIdentity | undefined;
    /** Date and time of the most recent modification of the attack simulation and training campaign. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Date and time of the launch/start of the attack simulation and training campaign. Supports $filter and $orderby. */
    private _launchDateTime?: Date | undefined;
    /** Method of delivery of the phishing payload used in the attack simulation and training campaign. Possible values are: unknown, sms, email, teams, unknownFutureValue. */
    private _payloadDeliveryPlatform?: PayloadDeliveryPlatform | undefined;
    /** Report of the attack simulation and training campaign. */
    private _report?: SimulationReport | undefined;
    /** Status of the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, draft, running, scheduled, succeeded, failed, cancelled, excluded, unknownFutureValue. */
    private _status?: SimulationStatus | undefined;
    /**
     * Gets the attackTechnique property value. The social engineering technique used in the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, credentialHarvesting, attachmentMalware, driveByUrl, linkInAttachment, linkToMalwareFile, unknownFutureValue. For more information on the types of social engineering attack techniques, see simulations.
     * @returns a simulationAttackTechnique
     */
    public get attackTechnique() {
        return this._attackTechnique;
    };
    /**
     * Sets the attackTechnique property value. The social engineering technique used in the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, credentialHarvesting, attachmentMalware, driveByUrl, linkInAttachment, linkToMalwareFile, unknownFutureValue. For more information on the types of social engineering attack techniques, see simulations.
     * @param value Value to set for the attackTechnique property.
     */
    public set attackTechnique(value: SimulationAttackTechnique | undefined) {
        this._attackTechnique = value;
    };
    /**
     * Gets the attackType property value. Attack type of the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, social, cloud, endpoint, unknownFutureValue.
     * @returns a simulationAttackType
     */
    public get attackType() {
        return this._attackType;
    };
    /**
     * Sets the attackType property value. Attack type of the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, social, cloud, endpoint, unknownFutureValue.
     * @param value Value to set for the attackType property.
     */
    public set attackType(value: SimulationAttackType | undefined) {
        this._attackType = value;
    };
    /**
     * Gets the automationId property value. Unique identifier for the attack simulation automation.
     * @returns a string
     */
    public get automationId() {
        return this._automationId;
    };
    /**
     * Sets the automationId property value. Unique identifier for the attack simulation automation.
     * @param value Value to set for the automationId property.
     */
    public set automationId(value: string | undefined) {
        this._automationId = value;
    };
    /**
     * Gets the completionDateTime property value. Date and time of completion of the attack simulation and training campaign. Supports $filter and $orderby.
     * @returns a Date
     */
    public get completionDateTime() {
        return this._completionDateTime;
    };
    /**
     * Sets the completionDateTime property value. Date and time of completion of the attack simulation and training campaign. Supports $filter and $orderby.
     * @param value Value to set for the completionDateTime property.
     */
    public set completionDateTime(value: Date | undefined) {
        this._completionDateTime = value;
    };
    /**
     * Instantiates a new simulation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.simulation";
    };
    /**
     * Gets the createdBy property value. Identity of the user who created the attack simulation and training campaign.
     * @returns a emailIdentity
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Identity of the user who created the attack simulation and training campaign.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: EmailIdentity | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. Date and time of creation of the attack simulation and training campaign.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time of creation of the attack simulation and training campaign.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. Description of the attack simulation and training campaign.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the attack simulation and training campaign.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Display name of the attack simulation and training campaign. Supports $filter and $orderby.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the attack simulation and training campaign. Supports $filter and $orderby.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "attackTechnique": n => { this.attackTechnique = n.getEnumValue<SimulationAttackTechnique>(SimulationAttackTechnique); },
            "attackType": n => { this.attackType = n.getEnumValue<SimulationAttackType>(SimulationAttackType); },
            "automationId": n => { this.automationId = n.getStringValue(); },
            "completionDateTime": n => { this.completionDateTime = n.getDateValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<EmailIdentity>(createEmailIdentityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isAutomated": n => { this.isAutomated = n.getBooleanValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<EmailIdentity>(createEmailIdentityFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "launchDateTime": n => { this.launchDateTime = n.getDateValue(); },
            "payloadDeliveryPlatform": n => { this.payloadDeliveryPlatform = n.getEnumValue<PayloadDeliveryPlatform>(PayloadDeliveryPlatform); },
            "report": n => { this.report = n.getObjectValue<SimulationReport>(createSimulationReportFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<SimulationStatus>(SimulationStatus); },
        };
    };
    /**
     * Gets the isAutomated property value. Flag that represents if the attack simulation and training campaign was created from a simulation automation flow. Supports $filter and $orderby.
     * @returns a boolean
     */
    public get isAutomated() {
        return this._isAutomated;
    };
    /**
     * Sets the isAutomated property value. Flag that represents if the attack simulation and training campaign was created from a simulation automation flow. Supports $filter and $orderby.
     * @param value Value to set for the isAutomated property.
     */
    public set isAutomated(value: boolean | undefined) {
        this._isAutomated = value;
    };
    /**
     * Gets the lastModifiedBy property value. Identity of the user who most recently modified the attack simulation and training campaign.
     * @returns a emailIdentity
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Identity of the user who most recently modified the attack simulation and training campaign.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: EmailIdentity | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Date and time of the most recent modification of the attack simulation and training campaign.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Date and time of the most recent modification of the attack simulation and training campaign.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the launchDateTime property value. Date and time of the launch/start of the attack simulation and training campaign. Supports $filter and $orderby.
     * @returns a Date
     */
    public get launchDateTime() {
        return this._launchDateTime;
    };
    /**
     * Sets the launchDateTime property value. Date and time of the launch/start of the attack simulation and training campaign. Supports $filter and $orderby.
     * @param value Value to set for the launchDateTime property.
     */
    public set launchDateTime(value: Date | undefined) {
        this._launchDateTime = value;
    };
    /**
     * Gets the payloadDeliveryPlatform property value. Method of delivery of the phishing payload used in the attack simulation and training campaign. Possible values are: unknown, sms, email, teams, unknownFutureValue.
     * @returns a payloadDeliveryPlatform
     */
    public get payloadDeliveryPlatform() {
        return this._payloadDeliveryPlatform;
    };
    /**
     * Sets the payloadDeliveryPlatform property value. Method of delivery of the phishing payload used in the attack simulation and training campaign. Possible values are: unknown, sms, email, teams, unknownFutureValue.
     * @param value Value to set for the payloadDeliveryPlatform property.
     */
    public set payloadDeliveryPlatform(value: PayloadDeliveryPlatform | undefined) {
        this._payloadDeliveryPlatform = value;
    };
    /**
     * Gets the report property value. Report of the attack simulation and training campaign.
     * @returns a simulationReport
     */
    public get report() {
        return this._report;
    };
    /**
     * Sets the report property value. Report of the attack simulation and training campaign.
     * @param value Value to set for the report property.
     */
    public set report(value: SimulationReport | undefined) {
        this._report = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<SimulationAttackTechnique>("attackTechnique", this.attackTechnique);
        writer.writeEnumValue<SimulationAttackType>("attackType", this.attackType);
        writer.writeStringValue("automationId", this.automationId);
        writer.writeDateValue("completionDateTime", this.completionDateTime);
        writer.writeObjectValue<EmailIdentity>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isAutomated", this.isAutomated);
        writer.writeObjectValue<EmailIdentity>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeDateValue("launchDateTime", this.launchDateTime);
        writer.writeEnumValue<PayloadDeliveryPlatform>("payloadDeliveryPlatform", this.payloadDeliveryPlatform);
        writer.writeObjectValue<SimulationReport>("report", this.report);
        writer.writeEnumValue<SimulationStatus>("status", this.status);
    };
    /**
     * Gets the status property value. Status of the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, draft, running, scheduled, succeeded, failed, cancelled, excluded, unknownFutureValue.
     * @returns a simulationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, draft, running, scheduled, succeeded, failed, cancelled, excluded, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: SimulationStatus | undefined) {
        this._status = value;
    };
}
