import {createUnifiedRbacResourceNamespaceFromDiscriminatorValue} from './createUnifiedRbacResourceNamespaceFromDiscriminatorValue';
import {createUnifiedRoleAssignmentFromDiscriminatorValue} from './createUnifiedRoleAssignmentFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {RbacApplication} from './rbacApplication';
import {serializeUnifiedRbacResourceNamespace} from './serializeUnifiedRbacResourceNamespace';
import {serializeUnifiedRoleAssignment} from './serializeUnifiedRoleAssignment';
import {serializeUnifiedRoleAssignmentSchedule} from './serializeUnifiedRoleAssignmentSchedule';
import {serializeUnifiedRoleAssignmentScheduleInstance} from './serializeUnifiedRoleAssignmentScheduleInstance';
import {serializeUnifiedRoleAssignmentScheduleRequest} from './serializeUnifiedRoleAssignmentScheduleRequest';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import {serializeUnifiedRoleEligibilityScheduleInstance} from './serializeUnifiedRoleEligibilityScheduleInstance';
import {serializeUnifiedRoleEligibilityScheduleRequest} from './serializeUnifiedRoleEligibilityScheduleRequest';
import {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import {UnifiedRoleAssignmentSchedule} from './unifiedRoleAssignmentSchedule';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleRequest} from './unifiedRoleEligibilityScheduleRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRbacApplication(rbacApplication: RbacApplication | undefined = {} as RbacApplication) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(rbacApplication),
        "resourceNamespaces": n => { rbacApplication.resourceNamespaces = n.getCollectionOfObjectValues<UnifiedRbacResourceNamespace>(createUnifiedRbacResourceNamespaceFromDiscriminatorValue); },
        "roleAssignments": n => { rbacApplication.roleAssignments = n.getCollectionOfObjectValues<UnifiedRoleAssignment>(createUnifiedRoleAssignmentFromDiscriminatorValue); },
        "roleAssignmentScheduleInstances": n => { rbacApplication.roleAssignmentScheduleInstances = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstance>(createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue); },
        "roleAssignmentScheduleRequests": n => { rbacApplication.roleAssignmentScheduleRequests = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequest>(createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue); },
        "roleAssignmentSchedules": n => { rbacApplication.roleAssignmentSchedules = n.getCollectionOfObjectValues<UnifiedRoleAssignmentSchedule>(createUnifiedRoleAssignmentScheduleFromDiscriminatorValue); },
        "roleDefinitions": n => { rbacApplication.roleDefinitions = n.getCollectionOfObjectValues<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
        "roleEligibilityScheduleInstances": n => { rbacApplication.roleEligibilityScheduleInstances = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
        "roleEligibilityScheduleRequests": n => { rbacApplication.roleEligibilityScheduleRequests = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequest>(createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue); },
        "roleEligibilitySchedules": n => { rbacApplication.roleEligibilitySchedules = n.getCollectionOfObjectValues<UnifiedRoleEligibilitySchedule>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
    }
}
