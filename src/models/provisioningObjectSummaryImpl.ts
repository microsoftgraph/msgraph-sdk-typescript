import {createInitiatorFromDiscriminatorValue} from './createInitiatorFromDiscriminatorValue';
import {createModifiedPropertyFromDiscriminatorValue} from './createModifiedPropertyFromDiscriminatorValue';
import {createProvisionedIdentityFromDiscriminatorValue} from './createProvisionedIdentityFromDiscriminatorValue';
import {createProvisioningServicePrincipalFromDiscriminatorValue} from './createProvisioningServicePrincipalFromDiscriminatorValue';
import {createProvisioningStatusInfoFromDiscriminatorValue} from './createProvisioningStatusInfoFromDiscriminatorValue';
import {createProvisioningStepFromDiscriminatorValue} from './createProvisioningStepFromDiscriminatorValue';
import {createProvisioningSystemFromDiscriminatorValue} from './createProvisioningSystemFromDiscriminatorValue';
import {EntityImpl, InitiatorImpl, ModifiedPropertyImpl, ProvisionedIdentityImpl, ProvisioningServicePrincipalImpl, ProvisioningStatusInfoImpl, ProvisioningStepImpl, ProvisioningSystemImpl} from './index';
import {Initiator} from './initiator';
import {ModifiedProperty} from './modifiedProperty';
import {ProvisionedIdentity} from './provisionedIdentity';
import {ProvisioningAction} from './provisioningAction';
import {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {ProvisioningServicePrincipal} from './provisioningServicePrincipal';
import {ProvisioningStatusInfo} from './provisioningStatusInfo';
import {ProvisioningStep} from './provisioningStep';
import {ProvisioningSystem} from './provisioningSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class ProvisioningObjectSummaryImpl extends EntityImpl implements ProvisioningObjectSummary {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _activityDateTime?: Date | undefined;
    /** Unique ID of this change in this cycle. */
    private _changeId?: string | undefined;
    /** Unique ID per job iteration. */
    private _cycleId?: string | undefined;
    /** Indicates how long this provisioning action took to finish. Measured in milliseconds. */
    private _durationInMilliseconds?: number | undefined;
    /** Details of who initiated this provisioning. */
    private _initiatedBy?: Initiator | undefined;
    /** The unique ID for the whole provisioning job. */
    private _jobId?: string | undefined;
    /** Details of each property that was modified in this provisioning action on this object. */
    private _modifiedProperties?: ModifiedProperty[] | undefined;
    /** Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list. */
    private _provisioningAction?: ProvisioningAction | undefined;
    /** Details of provisioning status. */
    private _provisioningStatusInfo?: ProvisioningStatusInfo | undefined;
    /** Details of each step in provisioning. */
    private _provisioningSteps?: ProvisioningStep[] | undefined;
    /** Represents the service principal used for provisioning. */
    private _servicePrincipal?: ProvisioningServicePrincipal | undefined;
    /** Details of source object being provisioned. */
    private _sourceIdentity?: ProvisionedIdentity | undefined;
    /** Details of source system of the object being provisioned. */
    private _sourceSystem?: ProvisioningSystem | undefined;
    /** Details of target object being provisioned. */
    private _targetIdentity?: ProvisionedIdentity | undefined;
    /** Details of target system of the object being provisioned. */
    private _targetSystem?: ProvisioningSystem | undefined;
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
        if(value) {
            this._activityDateTime = value;
        }
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
        if(value) {
            this._changeId = value;
        }
    };
    /**
     * Instantiates a new provisioningObjectSummary and sets the default values.
     * @param provisioningObjectSummaryParameterValue 
     */
    public constructor(provisioningObjectSummaryParameterValue?: ProvisioningObjectSummary | undefined) {
        super(provisioningObjectSummaryParameterValue);
        this._activityDateTime = provisioningObjectSummaryParameterValue?.activityDateTime;
        this._changeId = provisioningObjectSummaryParameterValue?.changeId;
        this._cycleId = provisioningObjectSummaryParameterValue?.cycleId;
        this._durationInMilliseconds = provisioningObjectSummaryParameterValue?.durationInMilliseconds;
        this._initiatedBy = provisioningObjectSummaryParameterValue?.initiatedBy;
        this._jobId = provisioningObjectSummaryParameterValue?.jobId;
        this._modifiedProperties = provisioningObjectSummaryParameterValue?.modifiedProperties;
        this._provisioningAction = provisioningObjectSummaryParameterValue?.provisioningAction;
        this._provisioningStatusInfo = provisioningObjectSummaryParameterValue?.provisioningStatusInfo;
        this._provisioningSteps = provisioningObjectSummaryParameterValue?.provisioningSteps;
        this._servicePrincipal = provisioningObjectSummaryParameterValue?.servicePrincipal;
        this._sourceIdentity = provisioningObjectSummaryParameterValue?.sourceIdentity;
        this._sourceSystem = provisioningObjectSummaryParameterValue?.sourceSystem;
        this._targetIdentity = provisioningObjectSummaryParameterValue?.targetIdentity;
        this._targetSystem = provisioningObjectSummaryParameterValue?.targetSystem;
        this._tenantId = provisioningObjectSummaryParameterValue?.tenantId;
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
        if(value) {
            this._cycleId = value;
        }
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
        if(value) {
            this._durationInMilliseconds = value;
        }
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
            "initiatedBy": n => { this.initiatedBy = n.getObjectValue<InitiatorImpl>(createInitiatorFromDiscriminatorValue); },
            "jobId": n => { this.jobId = n.getStringValue(); },
            "modifiedProperties": n => { this.modifiedProperties = n.getCollectionOfObjectValues<ModifiedPropertyImpl>(createModifiedPropertyFromDiscriminatorValue); },
            "provisioningAction": n => { this.provisioningAction = n.getEnumValue<ProvisioningAction>(ProvisioningAction); },
            "provisioningStatusInfo": n => { this.provisioningStatusInfo = n.getObjectValue<ProvisioningStatusInfoImpl>(createProvisioningStatusInfoFromDiscriminatorValue); },
            "provisioningSteps": n => { this.provisioningSteps = n.getCollectionOfObjectValues<ProvisioningStepImpl>(createProvisioningStepFromDiscriminatorValue); },
            "servicePrincipal": n => { this.servicePrincipal = n.getObjectValue<ProvisioningServicePrincipalImpl>(createProvisioningServicePrincipalFromDiscriminatorValue); },
            "sourceIdentity": n => { this.sourceIdentity = n.getObjectValue<ProvisionedIdentityImpl>(createProvisionedIdentityFromDiscriminatorValue); },
            "sourceSystem": n => { this.sourceSystem = n.getObjectValue<ProvisioningSystemImpl>(createProvisioningSystemFromDiscriminatorValue); },
            "targetIdentity": n => { this.targetIdentity = n.getObjectValue<ProvisionedIdentityImpl>(createProvisionedIdentityFromDiscriminatorValue); },
            "targetSystem": n => { this.targetSystem = n.getObjectValue<ProvisioningSystemImpl>(createProvisioningSystemFromDiscriminatorValue); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
        };
    };
    /**
     * Gets the initiatedBy property value. Details of who initiated this provisioning.
     * @returns a InitiatorInterface
     */
    public get initiatedBy() {
        return this._initiatedBy;
    };
    /**
     * Sets the initiatedBy property value. Details of who initiated this provisioning.
     * @param value Value to set for the initiatedBy property.
     */
    public set initiatedBy(value: Initiator | undefined) {
        if(value) {
            this._initiatedBy = value instanceof InitiatorImpl? value : new InitiatorImpl(value);
        }
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
        if(value) {
            this._jobId = value;
        }
    };
    /**
     * Gets the modifiedProperties property value. Details of each property that was modified in this provisioning action on this object.
     * @returns a ModifiedPropertyInterface
     */
    public get modifiedProperties() {
        return this._modifiedProperties;
    };
    /**
     * Sets the modifiedProperties property value. Details of each property that was modified in this provisioning action on this object.
     * @param value Value to set for the modifiedProperties property.
     */
    public set modifiedProperties(value: ModifiedProperty[] | undefined) {
        if(value) {
            const modifiedPropertiesArrValue: ModifiedPropertyImpl[] = [];
            this.modifiedProperties?.forEach(element => {
                modifiedPropertiesArrValue.push((element instanceof ModifiedPropertyImpl? element:new ModifiedPropertyImpl(element)));
            });
            this._modifiedProperties = modifiedPropertiesArrValue;
        }
    };
    /**
     * Gets the provisioningAction property value. Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list.
     * @returns a provisioningAction
     */
    public get provisioningAction() {
        return this._provisioningAction;
    };
    /**
     * Sets the provisioningAction property value. Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list.
     * @param value Value to set for the provisioningAction property.
     */
    public set provisioningAction(value: ProvisioningAction | undefined) {
        if(value) {
            this._provisioningAction = value;
        }
    };
    /**
     * Gets the provisioningStatusInfo property value. Details of provisioning status.
     * @returns a ProvisioningStatusInfoInterface
     */
    public get provisioningStatusInfo() {
        return this._provisioningStatusInfo;
    };
    /**
     * Sets the provisioningStatusInfo property value. Details of provisioning status.
     * @param value Value to set for the provisioningStatusInfo property.
     */
    public set provisioningStatusInfo(value: ProvisioningStatusInfo | undefined) {
        if(value) {
            this._provisioningStatusInfo = value instanceof ProvisioningStatusInfoImpl? value : new ProvisioningStatusInfoImpl(value);
        }
    };
    /**
     * Gets the provisioningSteps property value. Details of each step in provisioning.
     * @returns a ProvisioningStepInterface
     */
    public get provisioningSteps() {
        return this._provisioningSteps;
    };
    /**
     * Sets the provisioningSteps property value. Details of each step in provisioning.
     * @param value Value to set for the provisioningSteps property.
     */
    public set provisioningSteps(value: ProvisioningStep[] | undefined) {
        if(value) {
            const provisioningStepsArrValue: ProvisioningStepImpl[] = [];
            this.provisioningSteps?.forEach(element => {
                provisioningStepsArrValue.push((element instanceof ProvisioningStepImpl? element:new ProvisioningStepImpl(element)));
            });
            this._provisioningSteps = provisioningStepsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activityDateTime){
            writer.writeDateValue("activityDateTime", this.activityDateTime);
        }
        if(this.changeId){
            writer.writeStringValue("changeId", this.changeId);
        }
        if(this.cycleId){
            writer.writeStringValue("cycleId", this.cycleId);
        }
        if(this.durationInMilliseconds){
            writer.writeNumberValue("durationInMilliseconds", this.durationInMilliseconds);
        }
        if(this.initiatedBy){
            writer.writeObjectValue<InitiatorImpl>("initiatedBy", (!this.initiatedBy || this.initiatedBy instanceof InitiatorImpl? this.initiatedBy : new InitiatorImpl(this.initiatedBy)));
        }
        if(this.jobId){
            writer.writeStringValue("jobId", this.jobId);
        }
        if(this.modifiedProperties && this.modifiedProperties.length != 0){        const modifiedPropertiesArrValue: ModifiedPropertyImpl[] = [];
        this.modifiedProperties?.forEach(element => {
            modifiedPropertiesArrValue.push((element instanceof ModifiedPropertyImpl? element:new ModifiedPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ModifiedPropertyImpl>("modifiedProperties", modifiedPropertiesArrValue);
        }
        if(this.provisioningAction){
            writer.writeEnumValue<ProvisioningAction>("provisioningAction", this.provisioningAction);
        }
        if(this.provisioningStatusInfo){
            writer.writeObjectValue<ProvisioningStatusInfoImpl>("provisioningStatusInfo", (!this.provisioningStatusInfo || this.provisioningStatusInfo instanceof ProvisioningStatusInfoImpl? this.provisioningStatusInfo : new ProvisioningStatusInfoImpl(this.provisioningStatusInfo)));
        }
        if(this.provisioningSteps && this.provisioningSteps.length != 0){        const provisioningStepsArrValue: ProvisioningStepImpl[] = [];
        this.provisioningSteps?.forEach(element => {
            provisioningStepsArrValue.push((element instanceof ProvisioningStepImpl? element:new ProvisioningStepImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ProvisioningStepImpl>("provisioningSteps", provisioningStepsArrValue);
        }
        if(this.servicePrincipal){
            writer.writeObjectValue<ProvisioningServicePrincipalImpl>("servicePrincipal", (!this.servicePrincipal || this.servicePrincipal instanceof ProvisioningServicePrincipalImpl? this.servicePrincipal : new ProvisioningServicePrincipalImpl(this.servicePrincipal)));
        }
        if(this.sourceIdentity){
            writer.writeObjectValue<ProvisionedIdentityImpl>("sourceIdentity", (!this.sourceIdentity || this.sourceIdentity instanceof ProvisionedIdentityImpl? this.sourceIdentity : new ProvisionedIdentityImpl(this.sourceIdentity)));
        }
        if(this.sourceSystem){
            writer.writeObjectValue<ProvisioningSystemImpl>("sourceSystem", (!this.sourceSystem || this.sourceSystem instanceof ProvisioningSystemImpl? this.sourceSystem : new ProvisioningSystemImpl(this.sourceSystem)));
        }
        if(this.targetIdentity){
            writer.writeObjectValue<ProvisionedIdentityImpl>("targetIdentity", (!this.targetIdentity || this.targetIdentity instanceof ProvisionedIdentityImpl? this.targetIdentity : new ProvisionedIdentityImpl(this.targetIdentity)));
        }
        if(this.targetSystem){
            writer.writeObjectValue<ProvisioningSystemImpl>("targetSystem", (!this.targetSystem || this.targetSystem instanceof ProvisioningSystemImpl? this.targetSystem : new ProvisioningSystemImpl(this.targetSystem)));
        }
        if(this.tenantId){
            writer.writeStringValue("tenantId", this.tenantId);
        }
    };
    /**
     * Gets the servicePrincipal property value. Represents the service principal used for provisioning.
     * @returns a ProvisioningServicePrincipalInterface
     */
    public get servicePrincipal() {
        return this._servicePrincipal;
    };
    /**
     * Sets the servicePrincipal property value. Represents the service principal used for provisioning.
     * @param value Value to set for the servicePrincipal property.
     */
    public set servicePrincipal(value: ProvisioningServicePrincipal | undefined) {
        if(value) {
            this._servicePrincipal = value instanceof ProvisioningServicePrincipalImpl? value : new ProvisioningServicePrincipalImpl(value);
        }
    };
    /**
     * Gets the sourceIdentity property value. Details of source object being provisioned.
     * @returns a ProvisionedIdentityInterface
     */
    public get sourceIdentity() {
        return this._sourceIdentity;
    };
    /**
     * Sets the sourceIdentity property value. Details of source object being provisioned.
     * @param value Value to set for the sourceIdentity property.
     */
    public set sourceIdentity(value: ProvisionedIdentity | undefined) {
        if(value) {
            this._sourceIdentity = value instanceof ProvisionedIdentityImpl? value : new ProvisionedIdentityImpl(value);
        }
    };
    /**
     * Gets the sourceSystem property value. Details of source system of the object being provisioned.
     * @returns a ProvisioningSystemInterface
     */
    public get sourceSystem() {
        return this._sourceSystem;
    };
    /**
     * Sets the sourceSystem property value. Details of source system of the object being provisioned.
     * @param value Value to set for the sourceSystem property.
     */
    public set sourceSystem(value: ProvisioningSystem | undefined) {
        if(value) {
            this._sourceSystem = value instanceof ProvisioningSystemImpl? value : new ProvisioningSystemImpl(value);
        }
    };
    /**
     * Gets the targetIdentity property value. Details of target object being provisioned.
     * @returns a ProvisionedIdentityInterface
     */
    public get targetIdentity() {
        return this._targetIdentity;
    };
    /**
     * Sets the targetIdentity property value. Details of target object being provisioned.
     * @param value Value to set for the targetIdentity property.
     */
    public set targetIdentity(value: ProvisionedIdentity | undefined) {
        if(value) {
            this._targetIdentity = value instanceof ProvisionedIdentityImpl? value : new ProvisionedIdentityImpl(value);
        }
    };
    /**
     * Gets the targetSystem property value. Details of target system of the object being provisioned.
     * @returns a ProvisioningSystemInterface
     */
    public get targetSystem() {
        return this._targetSystem;
    };
    /**
     * Sets the targetSystem property value. Details of target system of the object being provisioned.
     * @param value Value to set for the targetSystem property.
     */
    public set targetSystem(value: ProvisioningSystem | undefined) {
        if(value) {
            this._targetSystem = value instanceof ProvisioningSystemImpl? value : new ProvisioningSystemImpl(value);
        }
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
        if(value) {
            this._tenantId = value;
        }
    };
}
