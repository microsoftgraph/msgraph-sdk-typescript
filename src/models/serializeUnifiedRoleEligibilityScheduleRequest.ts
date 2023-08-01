import type {AppScope} from './appScope';
import type {DirectoryObject} from './directoryObject';
import type {RequestSchedule} from './requestSchedule';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeRequest} from './serializeRequest';
import {serializeRequestSchedule} from './serializeRequestSchedule';
import {serializeTicketInfo} from './serializeTicketInfo';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import type {TicketInfo} from './ticketInfo';
import type {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import type {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import type {UnifiedRoleEligibilityScheduleRequest} from './unifiedRoleEligibilityScheduleRequest';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleRequest(writer: SerializationWriter, unifiedRoleEligibilityScheduleRequest: UnifiedRoleEligibilityScheduleRequest | undefined = {} as UnifiedRoleEligibilityScheduleRequest) : void {
        serializeRequest(writer, unifiedRoleEligibilityScheduleRequest)
        writer.writeEnumValue<UnifiedRoleScheduleRequestActions>("action", unifiedRoleEligibilityScheduleRequest.action);
        writer.writeObjectValue<AppScope>("appScope", unifiedRoleEligibilityScheduleRequest.appScope, serializeAppScope);
        writer.writeStringValue("appScopeId", unifiedRoleEligibilityScheduleRequest.appScopeId);
        writer.writeObjectValue<DirectoryObject>("directoryScope", unifiedRoleEligibilityScheduleRequest.directoryScope, serializeDirectoryObject);
        writer.writeStringValue("directoryScopeId", unifiedRoleEligibilityScheduleRequest.directoryScopeId);
        writer.writeBooleanValue("isValidationOnly", unifiedRoleEligibilityScheduleRequest.isValidationOnly);
        writer.writeStringValue("justification", unifiedRoleEligibilityScheduleRequest.justification);
        writer.writeObjectValue<DirectoryObject>("principal", unifiedRoleEligibilityScheduleRequest.principal, serializeDirectoryObject);
        writer.writeStringValue("principalId", unifiedRoleEligibilityScheduleRequest.principalId);
        writer.writeObjectValue<UnifiedRoleDefinition>("roleDefinition", unifiedRoleEligibilityScheduleRequest.roleDefinition, serializeUnifiedRoleDefinition);
        writer.writeStringValue("roleDefinitionId", unifiedRoleEligibilityScheduleRequest.roleDefinitionId);
        writer.writeObjectValue<RequestSchedule>("scheduleInfo", unifiedRoleEligibilityScheduleRequest.scheduleInfo, serializeRequestSchedule);
        writer.writeObjectValue<UnifiedRoleEligibilitySchedule>("targetSchedule", unifiedRoleEligibilityScheduleRequest.targetSchedule, serializeUnifiedRoleEligibilitySchedule);
        writer.writeStringValue("targetScheduleId", unifiedRoleEligibilityScheduleRequest.targetScheduleId);
        writer.writeObjectValue<TicketInfo>("ticketInfo", unifiedRoleEligibilityScheduleRequest.ticketInfo, serializeTicketInfo);
}
