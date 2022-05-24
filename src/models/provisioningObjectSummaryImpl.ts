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
export class ProvisioningObjectSummaryImpl extends EntityImpl implements Parsable, ProvisioningObjectSummary {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public activityDateTime?: Date | undefined;
    /** Unique ID of this change in this cycle. */
    public changeId?: string | undefined;
    /** Unique ID per job iteration. */
    public cycleId?: string | undefined;
    /** Indicates how long this provisioning action took to finish. Measured in milliseconds. */
    public durationInMilliseconds?: number | undefined;
    /** Details of who initiated this provisioning. */
    public initiatedBy?: Initiator | undefined;
    /** The unique ID for the whole provisioning job. */
    public jobId?: string | undefined;
    /** Details of each property that was modified in this provisioning action on this object. */
    public modifiedProperties?: ModifiedProperty[] | undefined;
    /** Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list. */
    public provisioningAction?: ProvisioningAction | undefined;
    /** Details of provisioning status. */
    public provisioningStatusInfo?: ProvisioningStatusInfo | undefined;
    /** Details of each step in provisioning. */
    public provisioningSteps?: ProvisioningStep[] | undefined;
    /** Represents the service principal used for provisioning. */
    public servicePrincipal?: ProvisioningServicePrincipal | undefined;
    /** Details of source object being provisioned. */
    public sourceIdentity?: ProvisionedIdentity | undefined;
    /** Details of source system of the object being provisioned. */
    public sourceSystem?: ProvisioningSystem | undefined;
    /** Details of target object being provisioned. */
    public targetIdentity?: ProvisionedIdentity | undefined;
    /** Details of target system of the object being provisioned. */
    public targetSystem?: ProvisioningSystem | undefined;
    /** Unique Azure AD tenant ID. */
    public tenantId?: string | undefined;
    /**
     * Instantiates a new provisioningObjectSummary and sets the default values.
     * @param provisioningObjectSummaryParameterValue 
     */
    public constructor(provisioningObjectSummaryParameterValue?: ProvisioningObjectSummary | undefined) {
        super();
        this.activityDateTime = provisioningObjectSummaryParameterValue?.activityDateTime ;
        this.changeId = provisioningObjectSummaryParameterValue?.changeId ;
        this.cycleId = provisioningObjectSummaryParameterValue?.cycleId ;
        this.durationInMilliseconds = provisioningObjectSummaryParameterValue?.durationInMilliseconds ;
        this.initiatedBy = provisioningObjectSummaryParameterValue?.initiatedBy ;
        this.jobId = provisioningObjectSummaryParameterValue?.jobId ;
        this.modifiedProperties = provisioningObjectSummaryParameterValue?.modifiedProperties ;
        this.provisioningAction = provisioningObjectSummaryParameterValue?.provisioningAction ;
        this.provisioningStatusInfo = provisioningObjectSummaryParameterValue?.provisioningStatusInfo ;
        this.provisioningSteps = provisioningObjectSummaryParameterValue?.provisioningSteps ;
        this.servicePrincipal = provisioningObjectSummaryParameterValue?.servicePrincipal ;
        this.sourceIdentity = provisioningObjectSummaryParameterValue?.sourceIdentity ;
        this.sourceSystem = provisioningObjectSummaryParameterValue?.sourceSystem ;
        this.targetIdentity = provisioningObjectSummaryParameterValue?.targetIdentity ;
        this.targetSystem = provisioningObjectSummaryParameterValue?.targetSystem ;
        this.tenantId = provisioningObjectSummaryParameterValue?.tenantId ;
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
        writer.writeObjectValue<InitiatorImpl>("initiatedBy", new InitiatorImpl(this.initiatedBy));
        }
        if(this.jobId){
        writer.writeStringValue("jobId", this.jobId);
        }
        if(this.modifiedProperties && this.modifiedProperties.length != 0){        const modifiedPropertiesArrValue: ModifiedPropertyImpl[] = []; this.modifiedProperties?.forEach(element => {modifiedPropertiesArrValue.push(new ModifiedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<ModifiedPropertyImpl>("modifiedProperties", modifiedPropertiesArrValue);
        }
        if(this.provisioningAction){
        writer.writeEnumValue<ProvisioningAction>("provisioningAction", this.provisioningAction);
        }
        if(this.provisioningStatusInfo){
        writer.writeObjectValue<ProvisioningStatusInfoImpl>("provisioningStatusInfo", new ProvisioningStatusInfoImpl(this.provisioningStatusInfo));
        }
        if(this.provisioningSteps && this.provisioningSteps.length != 0){        const provisioningStepsArrValue: ProvisioningStepImpl[] = []; this.provisioningSteps?.forEach(element => {provisioningStepsArrValue.push(new ProvisioningStepImpl(element));});
        writer.writeCollectionOfObjectValues<ProvisioningStepImpl>("provisioningSteps", provisioningStepsArrValue);
        }
        if(this.servicePrincipal){
        writer.writeObjectValue<ProvisioningServicePrincipalImpl>("servicePrincipal", new ProvisioningServicePrincipalImpl(this.servicePrincipal));
        }
        if(this.sourceIdentity){
        writer.writeObjectValue<ProvisionedIdentityImpl>("sourceIdentity", new ProvisionedIdentityImpl(this.sourceIdentity));
        }
        if(this.sourceSystem){
        writer.writeObjectValue<ProvisioningSystemImpl>("sourceSystem", new ProvisioningSystemImpl(this.sourceSystem));
        }
        if(this.targetIdentity){
        writer.writeObjectValue<ProvisionedIdentityImpl>("targetIdentity", new ProvisionedIdentityImpl(this.targetIdentity));
        }
        if(this.targetSystem){
        writer.writeObjectValue<ProvisioningSystemImpl>("targetSystem", new ProvisioningSystemImpl(this.targetSystem));
        }
        if(this.tenantId){
        writer.writeStringValue("tenantId", this.tenantId);
        }
    };
}
