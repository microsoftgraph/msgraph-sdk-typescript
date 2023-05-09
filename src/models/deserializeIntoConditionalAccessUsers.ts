import {ConditionalAccessGuestsOrExternalUsers} from './conditionalAccessGuestsOrExternalUsers';
import {ConditionalAccessUsers} from './conditionalAccessUsers';
import {createConditionalAccessGuestsOrExternalUsersFromDiscriminatorValue} from './createConditionalAccessGuestsOrExternalUsersFromDiscriminatorValue';
import {serializeConditionalAccessGuestsOrExternalUsers} from './serializeConditionalAccessGuestsOrExternalUsers';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessUsers(conditionalAccessUsers: ConditionalAccessUsers | undefined = {} as ConditionalAccessUsers) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeGroups": n => { conditionalAccessUsers.excludeGroups = n.getCollectionOfPrimitiveValues<string>(); },
        "excludeGuestsOrExternalUsers": n => { conditionalAccessUsers.excludeGuestsOrExternalUsers = n.getObjectValue<ConditionalAccessGuestsOrExternalUsers>(createConditionalAccessGuestsOrExternalUsersFromDiscriminatorValue); },
        "excludeRoles": n => { conditionalAccessUsers.excludeRoles = n.getCollectionOfPrimitiveValues<string>(); },
        "excludeUsers": n => { conditionalAccessUsers.excludeUsers = n.getCollectionOfPrimitiveValues<string>(); },
        "includeGroups": n => { conditionalAccessUsers.includeGroups = n.getCollectionOfPrimitiveValues<string>(); },
        "includeGuestsOrExternalUsers": n => { conditionalAccessUsers.includeGuestsOrExternalUsers = n.getObjectValue<ConditionalAccessGuestsOrExternalUsers>(createConditionalAccessGuestsOrExternalUsersFromDiscriminatorValue); },
        "includeRoles": n => { conditionalAccessUsers.includeRoles = n.getCollectionOfPrimitiveValues<string>(); },
        "includeUsers": n => { conditionalAccessUsers.includeUsers = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { conditionalAccessUsers.odataType = n.getStringValue(); },
    }
}
