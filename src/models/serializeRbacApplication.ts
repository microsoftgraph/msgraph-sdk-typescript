import type {RbacApplication} from './rbacApplication';
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
import type {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import type {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import type {UnifiedRoleAssignmentSchedule} from './unifiedRoleAssignmentSchedule';
import type {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import type {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import type {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import type {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import type {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import type {UnifiedRoleEligibilityScheduleRequest} from './unifiedRoleEligibilityScheduleRequest';
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
