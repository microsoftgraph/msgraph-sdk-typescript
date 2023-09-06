import { type AppScope } from './appScope';
import { type DirectoryObject } from './directoryObject';
import { type RequestSchedule } from './requestSchedule';
import { serializeAppScope } from './serializeAppScope';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { serializeRequest } from './serializeRequest';
import { serializeRequestSchedule } from './serializeRequestSchedule';
import { serializeTicketInfo } from './serializeTicketInfo';
import { serializeUnifiedRoleAssignmentSchedule } from './serializeUnifiedRoleAssignmentSchedule';
import { serializeUnifiedRoleDefinition } from './serializeUnifiedRoleDefinition';
import { serializeUnifiedRoleEligibilitySchedule } from './serializeUnifiedRoleEligibilitySchedule';
import { type TicketInfo } from './ticketInfo';
import { type UnifiedRoleAssignmentSchedule } from './unifiedRoleAssignmentSchedule';
import { type UnifiedRoleAssignmentScheduleRequest } from './unifiedRoleAssignmentScheduleRequest';
import { type UnifiedRoleDefinition } from './unifiedRoleDefinition';
import { type UnifiedRoleEligibilitySchedule } from './unifiedRoleEligibilitySchedule';
import { UnifiedRoleScheduleRequestActions } from './unifiedRoleScheduleRequestActions';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleRequest(writer: SerializationWriter, unifiedRoleAssignmentScheduleRequest: UnifiedRoleAssignmentScheduleRequest | undefined = {} as UnifiedRoleAssignmentScheduleRequest) : void {
        serializeRequest(writer, unifiedRoleAssignmentScheduleRequest)
        writer.writeEnumValue<UnifiedRoleScheduleRequestActions>("action", unifiedRoleAssignmentScheduleRequest.action);
        writer.writeObjectValue<UnifiedRoleEligibilitySchedule>("activatedUsing", unifiedRoleAssignmentScheduleRequest.activatedUsing, serializeUnifiedRoleEligibilitySchedule);
        writer.writeObjectValue<AppScope>("appScope", unifiedRoleAssignmentScheduleRequest.appScope, serializeAppScope);
        writer.writeStringValue("appScopeId", unifiedRoleAssignmentScheduleRequest.appScopeId);
        writer.writeObjectValue<DirectoryObject>("directoryScope", unifiedRoleAssignmentScheduleRequest.directoryScope, serializeDirectoryObject);
        writer.writeStringValue("directoryScopeId", unifiedRoleAssignmentScheduleRequest.directoryScopeId);
        writer.writeBooleanValue("isValidationOnly", unifiedRoleAssignmentScheduleRequest.isValidationOnly);
        writer.writeStringValue("justification", unifiedRoleAssignmentScheduleRequest.justification);
        writer.writeObjectValue<DirectoryObject>("principal", unifiedRoleAssignmentScheduleRequest.principal, serializeDirectoryObject);
        writer.writeStringValue("principalId", unifiedRoleAssignmentScheduleRequest.principalId);
        writer.writeObjectValue<UnifiedRoleDefinition>("roleDefinition", unifiedRoleAssignmentScheduleRequest.roleDefinition, serializeUnifiedRoleDefinition);
        writer.writeStringValue("roleDefinitionId", unifiedRoleAssignmentScheduleRequest.roleDefinitionId);
        writer.writeObjectValue<RequestSchedule>("scheduleInfo", unifiedRoleAssignmentScheduleRequest.scheduleInfo, serializeRequestSchedule);
        writer.writeObjectValue<UnifiedRoleAssignmentSchedule>("targetSchedule", unifiedRoleAssignmentScheduleRequest.targetSchedule, serializeUnifiedRoleAssignmentSchedule);
        writer.writeStringValue("targetScheduleId", unifiedRoleAssignmentScheduleRequest.targetScheduleId);
        writer.writeObjectValue<TicketInfo>("ticketInfo", unifiedRoleAssignmentScheduleRequest.ticketInfo, serializeTicketInfo);
}
