import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createRequestScheduleFromDiscriminatorValue} from './createRequestScheduleFromDiscriminatorValue';
import {createTicketInfoFromDiscriminatorValue} from './createTicketInfoFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {deserializeIntoRequest} from './deserializeIntoRequest';
import {DirectoryObject} from './directoryObject';
import {RequestSchedule} from './requestSchedule';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeRequestSchedule} from './serializeRequestSchedule';
import {serializeTicketInfo} from './serializeTicketInfo';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import {TicketInfo} from './ticketInfo';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleEligibilityScheduleRequest} from './unifiedRoleEligibilityScheduleRequest';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleRequest(unifiedRoleEligibilityScheduleRequest: UnifiedRoleEligibilityScheduleRequest | undefined = {} as UnifiedRoleEligibilityScheduleRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRequest(unifiedRoleEligibilityScheduleRequest),
        "action": n => { unifiedRoleEligibilityScheduleRequest.action = n.getEnumValue<UnifiedRoleScheduleRequestActions>(UnifiedRoleScheduleRequestActions); },
        "appScope": n => { unifiedRoleEligibilityScheduleRequest.appScope = n.getObjectValue<AppScope>(createAppScopeFromDiscriminatorValue); },
        "appScopeId": n => { unifiedRoleEligibilityScheduleRequest.appScopeId = n.getStringValue(); },
        "directoryScope": n => { unifiedRoleEligibilityScheduleRequest.directoryScope = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "directoryScopeId": n => { unifiedRoleEligibilityScheduleRequest.directoryScopeId = n.getStringValue(); },
        "isValidationOnly": n => { unifiedRoleEligibilityScheduleRequest.isValidationOnly = n.getBooleanValue(); },
        "justification": n => { unifiedRoleEligibilityScheduleRequest.justification = n.getStringValue(); },
        "principal": n => { unifiedRoleEligibilityScheduleRequest.principal = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "principalId": n => { unifiedRoleEligibilityScheduleRequest.principalId = n.getStringValue(); },
        "roleDefinition": n => { unifiedRoleEligibilityScheduleRequest.roleDefinition = n.getObjectValue<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
        "roleDefinitionId": n => { unifiedRoleEligibilityScheduleRequest.roleDefinitionId = n.getStringValue(); },
        "scheduleInfo": n => { unifiedRoleEligibilityScheduleRequest.scheduleInfo = n.getObjectValue<RequestSchedule>(createRequestScheduleFromDiscriminatorValue); },
        "targetSchedule": n => { unifiedRoleEligibilityScheduleRequest.targetSchedule = n.getObjectValue<UnifiedRoleEligibilitySchedule>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
        "targetScheduleId": n => { unifiedRoleEligibilityScheduleRequest.targetScheduleId = n.getStringValue(); },
        "ticketInfo": n => { unifiedRoleEligibilityScheduleRequest.ticketInfo = n.getObjectValue<TicketInfo>(createTicketInfoFromDiscriminatorValue); },
    }
}
