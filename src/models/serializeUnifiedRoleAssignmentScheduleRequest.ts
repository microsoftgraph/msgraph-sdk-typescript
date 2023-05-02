import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {RequestSchedule} from './requestSchedule';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeRequest} from './serializeRequest';
import {serializeRequestSchedule} from './serializeRequestSchedule';
import {serializeTicketInfo} from './serializeTicketInfo';
import {serializeUnifiedRoleAssignmentSchedule} from './serializeUnifiedRoleAssignmentSchedule';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import {TicketInfo} from './ticketInfo';
import {UnifiedRoleAssignmentSchedule} from './unifiedRoleAssignmentSchedule';
import {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
