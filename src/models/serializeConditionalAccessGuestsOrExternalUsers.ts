import {ConditionalAccessExternalTenants} from './conditionalAccessExternalTenants';
import {ConditionalAccessGuestOrExternalUserTypes} from './conditionalAccessGuestOrExternalUserTypes';
import {ConditionalAccessGuestsOrExternalUsers} from './conditionalAccessGuestsOrExternalUsers';
import {serializeConditionalAccessExternalTenants} from './serializeConditionalAccessExternalTenants';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessGuestsOrExternalUsers(conditionalAccessGuestsOrExternalUsers: ConditionalAccessGuestsOrExternalUsers | undefined = {} as ConditionalAccessGuestsOrExternalUsers, writer: SerializationWriter) : void {
        writer.writeObjectValue<ConditionalAccessExternalTenants>("externalTenants", conditionalAccessGuestsOrExternalUsers.externalTenants, serializeConditionalAccessExternalTenants);
        writer.writeEnumValue<ConditionalAccessGuestOrExternalUserTypes>("guestOrExternalUserTypes", conditionalAccessGuestsOrExternalUsers.guestOrExternalUserTypes);
        writer.writeStringValue("@odata.type", conditionalAccessGuestsOrExternalUsers.odataType);
        writer.writeAdditionalData(conditionalAccessGuestsOrExternalUsers.additionalData);
}
