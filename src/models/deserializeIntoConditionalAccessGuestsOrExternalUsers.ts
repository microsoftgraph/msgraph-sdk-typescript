import type {ConditionalAccessExternalTenants} from './conditionalAccessExternalTenants';
import {ConditionalAccessGuestOrExternalUserTypes} from './conditionalAccessGuestOrExternalUserTypes';
import type {ConditionalAccessGuestsOrExternalUsers} from './conditionalAccessGuestsOrExternalUsers';
import {createConditionalAccessExternalTenantsFromDiscriminatorValue} from './createConditionalAccessExternalTenantsFromDiscriminatorValue';
import {serializeConditionalAccessExternalTenants} from './serializeConditionalAccessExternalTenants';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessGuestsOrExternalUsers(conditionalAccessGuestsOrExternalUsers: ConditionalAccessGuestsOrExternalUsers | undefined = {} as ConditionalAccessGuestsOrExternalUsers) : Record<string, (node: ParseNode) => void> {
    return {
        "externalTenants": n => { conditionalAccessGuestsOrExternalUsers.externalTenants = n.getObjectValue<ConditionalAccessExternalTenants>(createConditionalAccessExternalTenantsFromDiscriminatorValue); },
        "guestOrExternalUserTypes": n => { conditionalAccessGuestsOrExternalUsers.guestOrExternalUserTypes = n.getEnumValue<ConditionalAccessGuestOrExternalUserTypes>(ConditionalAccessGuestOrExternalUserTypes); },
        "@odata.type": n => { conditionalAccessGuestsOrExternalUsers.odataType = n.getStringValue(); },
    }
}
