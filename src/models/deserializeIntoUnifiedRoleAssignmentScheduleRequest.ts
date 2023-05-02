import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createRequestScheduleFromDiscriminatorValue} from './createRequestScheduleFromDiscriminatorValue';
import {createTicketInfoFromDiscriminatorValue} from './createTicketInfoFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {deserializeIntoRequest} from './deserializeIntoRequest';
import {DirectoryObject} from './directoryObject';
import {RequestSchedule} from './requestSchedule';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
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

export function deserializeIntoUnifiedRoleAssignmentScheduleRequest(unifiedRoleAssignmentScheduleRequest: UnifiedRoleAssignmentScheduleRequest | undefined = {} as UnifiedRoleAssignmentScheduleRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRequest(unifiedRoleAssignmentScheduleRequest),
        "action": n => { unifiedRoleAssignmentScheduleRequest.action = n.getEnumValue<UnifiedRoleScheduleRequestActions>(UnifiedRoleScheduleRequestActions); },
        "activatedUsing": n => { unifiedRoleAssignmentScheduleRequest.activatedUsing = n.getObjectValue<UnifiedRoleEligibilitySchedule>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
        "appScope": n => { unifiedRoleAssignmentScheduleRequest.appScope = n.getObjectValue<AppScope>(createAppScopeFromDiscriminatorValue); },
        "appScopeId": n => { unifiedRoleAssignmentScheduleRequest.appScopeId = n.getStringValue(); },
        "directoryScope": n => { unifiedRoleAssignmentScheduleRequest.directoryScope = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "directoryScopeId": n => { unifiedRoleAssignmentScheduleRequest.directoryScopeId = n.getStringValue(); },
        "isValidationOnly": n => { unifiedRoleAssignmentScheduleRequest.isValidationOnly = n.getBooleanValue(); },
        "justification": n => { unifiedRoleAssignmentScheduleRequest.justification = n.getStringValue(); },
        "principal": n => { unifiedRoleAssignmentScheduleRequest.principal = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "principalId": n => { unifiedRoleAssignmentScheduleRequest.principalId = n.getStringValue(); },
        "roleDefinition": n => { unifiedRoleAssignmentScheduleRequest.roleDefinition = n.getObjectValue<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
        "roleDefinitionId": n => { unifiedRoleAssignmentScheduleRequest.roleDefinitionId = n.getStringValue(); },
        "scheduleInfo": n => { unifiedRoleAssignmentScheduleRequest.scheduleInfo = n.getObjectValue<RequestSchedule>(createRequestScheduleFromDiscriminatorValue); },
        "targetSchedule": n => { unifiedRoleAssignmentScheduleRequest.targetSchedule = n.getObjectValue<UnifiedRoleAssignmentSchedule>(createUnifiedRoleAssignmentScheduleFromDiscriminatorValue); },
        "targetScheduleId": n => { unifiedRoleAssignmentScheduleRequest.targetScheduleId = n.getStringValue(); },
        "ticketInfo": n => { unifiedRoleAssignmentScheduleRequest.ticketInfo = n.getObjectValue<TicketInfo>(createTicketInfoFromDiscriminatorValue); },
    }
}
