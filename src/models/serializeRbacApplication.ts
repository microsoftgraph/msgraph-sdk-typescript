import {RbacApplication} from './rbacApplication';
import {serializeEntity} from './serializeEntity';
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

export function serializeRbacApplication(writer: SerializationWriter, rbacApplication: RbacApplication | undefined = {} as RbacApplication) : void {
        serializeEntity(writer, rbacApplication)
        writer.writeCollectionOfObjectValues<UnifiedRbacResourceNamespace>("resourceNamespaces", rbacApplication.resourceNamespaces, serializeUnifiedRbacResourceNamespace);
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignment>("roleAssignments", rbacApplication.roleAssignments, serializeUnifiedRoleAssignment);
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstance>("roleAssignmentScheduleInstances", rbacApplication.roleAssignmentScheduleInstances, serializeUnifiedRoleAssignmentScheduleInstance);
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequest>("roleAssignmentScheduleRequests", rbacApplication.roleAssignmentScheduleRequests, serializeUnifiedRoleAssignmentScheduleRequest);
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentSchedule>("roleAssignmentSchedules", rbacApplication.roleAssignmentSchedules, serializeUnifiedRoleAssignmentSchedule);
        writer.writeCollectionOfObjectValues<UnifiedRoleDefinition>("roleDefinitions", rbacApplication.roleDefinitions, serializeUnifiedRoleDefinition);
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>("roleEligibilityScheduleInstances", rbacApplication.roleEligibilityScheduleInstances, serializeUnifiedRoleEligibilityScheduleInstance);
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequest>("roleEligibilityScheduleRequests", rbacApplication.roleEligibilityScheduleRequests, serializeUnifiedRoleEligibilityScheduleRequest);
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilitySchedule>("roleEligibilitySchedules", rbacApplication.roleEligibilitySchedules, serializeUnifiedRoleEligibilitySchedule);
}
