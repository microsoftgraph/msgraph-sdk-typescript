import {AdminMember1, Entity, Initiator, ModifiedProperty, ProvisionedIdentity, ProvisioningServicePrincipal, ProvisioningStatusInfo, ProvisioningStep, ProvisioningSystem} from './index';
import {ProvisioningAction} from './provisioningAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class ProvisioningObjectSummary extends Entity implements Parsable {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _activityDateTime?: Date | undefined;
    /** Unique ID of this change in this cycle. */
    private _changeId?: string | undefined;
    /** Unique ID per job iteration. */
    private _cycleId?: string | undefined;
    /** Indicates how long this provisioning action took to finish. Measured in milliseconds. */
    private _durationInMilliseconds?: number | undefined;
    /** Details of who initiated this provisioning. */
    private _initiatedBy?: Initiator | AdminMember1 | undefined;
    /** The unique ID for the whole provisioning job. */
    private _jobId?: string | undefined;
    /** Details of each property that was modified in this provisioning action on this object. */
    private _modifiedProperties?: ModifiedProperty | AdminMember1[] | undefined;
    /** Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list. */
    private _provisioningAction?: ProvisioningAction | AdminMember1 | undefined;
    /** Details of provisioning status. */
    private _provisioningStatusInfo?: ProvisioningStatusInfo | AdminMember1 | undefined;
    /** Details of each step in provisioning. */
    private _provisioningSteps?: ProvisioningStep | AdminMember1[] | undefined;
    /** Represents the service principal used for provisioning. */
    private _servicePrincipal?: ProvisioningServicePrincipal | AdminMember1 | undefined;
    /** Details of source object being provisioned. */
    private _sourceIdentity?: ProvisionedIdentity | AdminMember1 | undefined;
    /** Details of source system of the object being provisioned. */
    private _sourceSystem?: ProvisioningSystem | AdminMember1 | undefined;
    /** Details of target object being provisioned. */
    private _targetIdentity?: ProvisionedIdentity | AdminMember1 | undefined;
    /** Details of target system of the object being provisioned. */
    private _targetSystem?: ProvisioningSystem | AdminMember1 | undefined;
    /** Unique Azure AD tenant ID. */
    private _tenantId?: string | undefined;
    /**
     * Gets the activityDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get activityDateTime() {
        return this._activityDateTime;
    };
    /**
     * Sets the activityDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the activityDateTime property.
     */
    public set activityDateTime(value: Date | undefined) {
        this._activityDateTime = value;
    };
    /**
     * Gets the changeId property value. Unique ID of this change in this cycle.
     * @returns a string
     */
    public get changeId() {
        return this._changeId;
    };
    /**
     * Sets the changeId property value. Unique ID of this change in this cycle.
     * @param value Value to set for the changeId property.
     */
    public set changeId(value: string | undefined) {
        this._changeId = value;
    };
    /**
     * Instantiates a new provisioningObjectSummary and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the cycleId property value. Unique ID per job iteration.
     * @returns a string
     */
    public get cycleId() {
        return this._cycleId;
    };
    /**
     * Sets the cycleId property value. Unique ID per job iteration.
     * @param value Value to set for the cycleId property.
     */
    public set cycleId(value: string | undefined) {
        this._cycleId = value;
    };
    /**
     * Gets the durationInMilliseconds property value. Indicates how long this provisioning action took to finish. Measured in milliseconds.
     * @returns a integer
     */
    public get durationInMilliseconds() {
        return this._durationInMilliseconds;
    };
    /**
     * Sets the durationInMilliseconds property value. Indicates how long this provisioning action took to finish. Measured in milliseconds.
     * @param value Value to set for the durationInMilliseconds property.
     */
    public set durationInMilliseconds(value: number | undefined) {
        this._durationInMilliseconds = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activityDateTime": n => { this.activityDateTime = n.getDateValue(); },
            "changeId": n => { this.changeId = n.getStringValue(); },
            "cycleId": n => { this.cycleId = n.getStringValue(); },
            "durationInMilliseconds": n => { this.durationInMilliseconds = n.getNumberValue(); },
            "initiatedBy": n => { this.initiatedBy = n.getObjectValue<Initiator>(createInitiatorFromDiscriminatorValue); },
            "jobId": n => { this.jobId = n.getStringValue(); },
            "modifiedProperties": n => { this.modifiedProperties = n.getObjectValue<ModifiedProperty>(createModifiedPropertyFromDiscriminatorValue); },
            "provisioningAction": n => { this.provisioningAction = n.getObjectValue<ProvisioningAction>(createProvisioningActionFromDiscriminatorValue); },
            "provisioningStatusInfo": n => { this.provisioningStatusInfo = n.getObjectValue<ProvisioningStatusInfo>(createProvisioningStatusInfoFromDiscriminatorValue); },
            "provisioningSteps": n => { this.provisioningSteps = n.getObjectValue<ProvisioningStep>(createProvisioningStepFromDiscriminatorValue); },
            "servicePrincipal": n => { this.servicePrincipal = n.getObjectValue<ProvisioningServicePrincipal>(createProvisioningServicePrincipalFromDiscriminatorValue); },
            "sourceIdentity": n => { this.sourceIdentity = n.getObjectValue<ProvisionedIdentity>(createProvisionedIdentityFromDiscriminatorValue); },
            "sourceSystem": n => { this.sourceSystem = n.getObjectValue<ProvisioningSystem>(createProvisioningSystemFromDiscriminatorValue); },
            "targetIdentity": n => { this.targetIdentity = n.getObjectValue<ProvisionedIdentity>(createProvisionedIdentityFromDiscriminatorValue); },
            "targetSystem": n => { this.targetSystem = n.getObjectValue<ProvisioningSystem>(createProvisioningSystemFromDiscriminatorValue); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
        };
    };
    /**
     * Gets the initiatedBy property value. Details of who initiated this provisioning.
     * @returns a admin
     */
    public get initiatedBy() {
        return this._initiatedBy;
    };
    /**
     * Sets the initiatedBy property value. Details of who initiated this provisioning.
     * @param value Value to set for the initiatedBy property.
     */
    public set initiatedBy(value: Initiator | AdminMember1 | undefined) {
        this._initiatedBy = value;
    };
    /**
     * Gets the jobId property value. The unique ID for the whole provisioning job.
     * @returns a string
     */
    public get jobId() {
        return this._jobId;
    };
    /**
     * Sets the jobId property value. The unique ID for the whole provisioning job.
     * @param value Value to set for the jobId property.
     */
    public set jobId(value: string | undefined) {
        this._jobId = value;
    };
    /**
     * Gets the modifiedProperties property value. Details of each property that was modified in this provisioning action on this object.
     * @returns a admin
     */
    public get modifiedProperties() {
        return this._modifiedProperties;
    };
    /**
     * Sets the modifiedProperties property value. Details of each property that was modified in this provisioning action on this object.
     * @param value Value to set for the modifiedProperties property.
     */
    public set modifiedProperties(value: ModifiedProperty | AdminMember1[] | undefined) {
        this._modifiedProperties = value;
    };
    /**
     * Gets the provisioningAction property value. Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list.
     * @returns a admin
     */
    public get provisioningAction() {
        return this._provisioningAction;
    };
    /**
     * Sets the provisioningAction property value. Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list.
     * @param value Value to set for the provisioningAction property.
     */
    public set provisioningAction(value: ProvisioningAction | AdminMember1 | undefined) {
        this._provisioningAction = value;
    };
    /**
     * Gets the provisioningStatusInfo property value. Details of provisioning status.
     * @returns a admin
     */
    public get provisioningStatusInfo() {
        return this._provisioningStatusInfo;
    };
    /**
     * Sets the provisioningStatusInfo property value. Details of provisioning status.
     * @param value Value to set for the provisioningStatusInfo property.
     */
    public set provisioningStatusInfo(value: ProvisioningStatusInfo | AdminMember1 | undefined) {
        this._provisioningStatusInfo = value;
    };
    /**
     * Gets the provisioningSteps property value. Details of each step in provisioning.
     * @returns a admin
     */
    public get provisioningSteps() {
        return this._provisioningSteps;
    };
    /**
     * Sets the provisioningSteps property value. Details of each step in provisioning.
     * @param value Value to set for the provisioningSteps property.
     */
    public set provisioningSteps(value: ProvisioningStep | AdminMember1[] | undefined) {
        this._provisioningSteps = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        writer.writeStringValue("changeId", this.changeId);
        writer.writeStringValue("cycleId", this.cycleId);
        writer.writeNumberValue("durationInMilliseconds", this.durationInMilliseconds);
        writer.writeObjectValue<Initiator>("initiatedBy", this.initiatedBy);
        writer.writeStringValue("jobId", this.jobId);
        writer.writeObjectValue<ModifiedProperty>("modifiedProperties", this.modifiedProperties);
        writer.writeObjectValue<ProvisioningAction>("provisioningAction", this.provisioningAction);
        writer.writeObjectValue<ProvisioningStatusInfo>("provisioningStatusInfo", this.provisioningStatusInfo);
        writer.writeObjectValue<ProvisioningStep>("provisioningSteps", this.provisioningSteps);
        writer.writeObjectValue<ProvisioningServicePrincipal>("servicePrincipal", this.servicePrincipal);
        writer.writeObjectValue<ProvisionedIdentity>("sourceIdentity", this.sourceIdentity);
        writer.writeObjectValue<ProvisioningSystem>("sourceSystem", this.sourceSystem);
        writer.writeObjectValue<ProvisionedIdentity>("targetIdentity", this.targetIdentity);
        writer.writeObjectValue<ProvisioningSystem>("targetSystem", this.targetSystem);
        writer.writeStringValue("tenantId", this.tenantId);
    };
    /**
     * Gets the servicePrincipal property value. Represents the service principal used for provisioning.
     * @returns a admin
     */
    public get servicePrincipal() {
        return this._servicePrincipal;
    };
    /**
     * Sets the servicePrincipal property value. Represents the service principal used for provisioning.
     * @param value Value to set for the servicePrincipal property.
     */
    public set servicePrincipal(value: ProvisioningServicePrincipal | AdminMember1 | undefined) {
        this._servicePrincipal = value;
    };
    /**
     * Gets the sourceIdentity property value. Details of source object being provisioned.
     * @returns a admin
     */
    public get sourceIdentity() {
        return this._sourceIdentity;
    };
    /**
     * Sets the sourceIdentity property value. Details of source object being provisioned.
     * @param value Value to set for the sourceIdentity property.
     */
    public set sourceIdentity(value: ProvisionedIdentity | AdminMember1 | undefined) {
        this._sourceIdentity = value;
    };
    /**
     * Gets the sourceSystem property value. Details of source system of the object being provisioned.
     * @returns a admin
     */
    public get sourceSystem() {
        return this._sourceSystem;
    };
    /**
     * Sets the sourceSystem property value. Details of source system of the object being provisioned.
     * @param value Value to set for the sourceSystem property.
     */
    public set sourceSystem(value: ProvisioningSystem | AdminMember1 | undefined) {
        this._sourceSystem = value;
    };
    /**
     * Gets the targetIdentity property value. Details of target object being provisioned.
     * @returns a admin
     */
    public get targetIdentity() {
        return this._targetIdentity;
    };
    /**
     * Sets the targetIdentity property value. Details of target object being provisioned.
     * @param value Value to set for the targetIdentity property.
     */
    public set targetIdentity(value: ProvisionedIdentity | AdminMember1 | undefined) {
        this._targetIdentity = value;
    };
    /**
     * Gets the targetSystem property value. Details of target system of the object being provisioned.
     * @returns a admin
     */
    public get targetSystem() {
        return this._targetSystem;
    };
    /**
     * Sets the targetSystem property value. Details of target system of the object being provisioned.
     * @param value Value to set for the targetSystem property.
     */
    public set targetSystem(value: ProvisioningSystem | AdminMember1 | undefined) {
        this._targetSystem = value;
    };
    /**
     * Gets the tenantId property value. Unique Azure AD tenant ID.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. Unique Azure AD tenant ID.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
}
