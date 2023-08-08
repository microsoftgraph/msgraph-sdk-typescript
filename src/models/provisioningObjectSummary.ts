import type {Entity} from './entity';
import type {Initiator} from './initiator';
import type {ModifiedProperty} from './modifiedProperty';
import type {ProvisionedIdentity} from './provisionedIdentity';
import {ProvisioningAction} from './provisioningAction';
import type {ProvisioningServicePrincipal} from './provisioningServicePrincipal';
import type {ProvisioningStatusInfo} from './provisioningStatusInfo';
import type {ProvisioningStep} from './provisioningStep';
import type {ProvisioningSystem} from './provisioningSystem';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningObjectSummary extends Entity, Parsable {
    /**
     * Represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  SUpports $filter (eq, gt, lt) and orderby.
     */
    activityDateTime?: Date | undefined;
    /**
     * Unique ID of this change in this cycle. Supports $filter (eq, contains).
     */
    changeId?: string | undefined;
    /**
     * Unique ID per job iteration. Supports $filter (eq, contains).
     */
    cycleId?: string | undefined;
    /**
     * Indicates how long this provisioning action took to finish. Measured in milliseconds.
     */
    durationInMilliseconds?: number | undefined;
    /**
     * Details of who initiated this provisioning. Supports $filter (eq, contains).
     */
    initiatedBy?: Initiator | undefined;
    /**
     * The unique ID for the whole provisioning job. Supports $filter (eq, contains).
     */
    jobId?: string | undefined;
    /**
     * Details of each property that was modified in this provisioning action on this object.
     */
    modifiedProperties?: ModifiedProperty[] | undefined;
    /**
     * Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list. Supports $filter (eq, contains).
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
     * Represents the service principal used for provisioning. Supports $filter (eq) for id and name.
     */
    servicePrincipal?: ProvisioningServicePrincipal | undefined;
    /**
     * Details of source object being provisioned. Supports $filter (eq, contains) for identityType, id, and displayName.
     */
    sourceIdentity?: ProvisionedIdentity | undefined;
    /**
     * Details of source system of the object being provisioned. Supports $filter (eq, contains) for displayName.
     */
    sourceSystem?: ProvisioningSystem | undefined;
    /**
     * Details of target object being provisioned. Supports $filter (eq, contains) for identityType, id, and displayName.
     */
    targetIdentity?: ProvisionedIdentity | undefined;
    /**
     * Details of target system of the object being provisioned. Supports $filter (eq, contains) for displayName.
     */
    targetSystem?: ProvisioningSystem | undefined;
    /**
     * Unique Azure AD tenant ID. Supports $filter (eq, contains).
     */
    tenantId?: string | undefined;
}
