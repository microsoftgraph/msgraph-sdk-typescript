import {ConditionalAccessExternalTenants} from './conditionalAccessExternalTenants';
import {ConditionalAccessGuestOrExternalUserTypes} from './conditionalAccessGuestOrExternalUserTypes';
import {ConditionalAccessGuestsOrExternalUsers} from './conditionalAccessGuestsOrExternalUsers';
import {serializeConditionalAccessExternalTenants} from './serializeConditionalAccessExternalTenants';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessGuestsOrExternalUsers(writer: SerializationWriter, conditionalAccessGuestsOrExternalUsers: ConditionalAccessGuestsOrExternalUsers | undefined = {} as ConditionalAccessGuestsOrExternalUsers) : void {
        writer.writeObjectValue<ConditionalAccessExternalTenants>("externalTenants", conditionalAccessGuestsOrExternalUsers.externalTenants, serializeConditionalAccessExternalTenants);
        writer.writeEnumValue<ConditionalAccessGuestOrExternalUserTypes>("guestOrExternalUserTypes", conditionalAccessGuestsOrExternalUsers.guestOrExternalUserTypes);
        writer.writeStringValue("@odata.type", conditionalAccessGuestsOrExternalUsers.odataType);
        writer.writeAdditionalData(conditionalAccessGuestsOrExternalUsers.additionalData);
}
