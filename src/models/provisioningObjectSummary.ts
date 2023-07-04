import {Entity} from './entity';
import {Initiator} from './initiator';
import {ModifiedProperty} from './modifiedProperty';
import {ProvisionedIdentity} from './provisionedIdentity';
import {ProvisioningAction} from './provisioningAction';
import {ProvisioningServicePrincipal} from './provisioningServicePrincipal';
import {ProvisioningStatusInfo} from './provisioningStatusInfo';
import {ProvisioningStep} from './provisioningStep';
import {ProvisioningSystem} from './provisioningSystem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningObjectSummary extends Entity, Parsable {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    activityDateTime?: Date | undefined;
    /**
     * Unique ID of this change in this cycle.
     */
    changeId?: string | undefined;
    /**
     * Unique ID per job iteration.
     */
    cycleId?: string | undefined;
    /**
     * Indicates how long this provisioning action took to finish. Measured in milliseconds.
     */
    durationInMilliseconds?: number | undefined;
    /**
     * Details of who initiated this provisioning.
     */
    initiatedBy?: Initiator | undefined;
    /**
     * The unique ID for the whole provisioning job.
     */
    jobId?: string | undefined;
    /**
     * Details of each property that was modified in this provisioning action on this object.
     */
    modifiedProperties?: ModifiedProperty[] | undefined;
    /**
     * Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list.
     */
    provisioningAction?: ProvisioningAction | undefined;
    /**
     * Details of provisioning status.
     */
    provisioningStatusInfo?: ProvisioningStatusInfo | undefined;
    /**
     * Details of each step in provisioning.
     */
    provisioningSteps?: ProvisioningStep[] | undefined;
    /**
     * Represents the service principal used for provisioning.
     */
    servicePrincipal?: ProvisioningServicePrincipal | undefined;
    /**
     * Details of source object being provisioned.
     */
    sourceIdentity?: ProvisionedIdentity | undefined;
    /**
     * Details of source system of the object being provisioned.
     */
    sourceSystem?: ProvisioningSystem | undefined;
    /**
     * Details of target object being provisioned.
     */
    targetIdentity?: ProvisionedIdentity | undefined;
    /**
     * Details of target system of the object being provisioned.
     */
    targetSystem?: ProvisioningSystem | undefined;
    /**
     * Unique Azure AD tenant ID.
     */
    tenantId?: string | undefined;
}
