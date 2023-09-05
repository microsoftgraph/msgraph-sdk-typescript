import { type ConditionalAccessExternalTenants } from './conditionalAccessExternalTenants';
import { ConditionalAccessGuestOrExternalUserTypes } from './conditionalAccessGuestOrExternalUserTypes';
import { type ConditionalAccessGuestsOrExternalUsers } from './conditionalAccessGuestsOrExternalUsers';
import { serializeConditionalAccessExternalTenants } from './serializeConditionalAccessExternalTenants';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessGuestsOrExternalUsers(writer: SerializationWriter, conditionalAccessGuestsOrExternalUsers: ConditionalAccessGuestsOrExternalUsers | undefined = {} as ConditionalAccessGuestsOrExternalUsers) : void {
        writer.writeObjectValue<ConditionalAccessExternalTenants>("externalTenants", conditionalAccessGuestsOrExternalUsers.externalTenants, serializeConditionalAccessExternalTenants);
        writer.writeEnumValue<ConditionalAccessGuestOrExternalUserTypes>("guestOrExternalUserTypes", conditionalAccessGuestsOrExternalUsers.guestOrExternalUserTypes);
        writer.writeStringValue("@odata.type", conditionalAccessGuestsOrExternalUsers.odataType);
        writer.writeAdditionalData(conditionalAccessGuestsOrExternalUsers.additionalData);
}
