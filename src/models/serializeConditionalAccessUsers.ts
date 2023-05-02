import {ConditionalAccessGuestsOrExternalUsers} from './conditionalAccessGuestsOrExternalUsers';
import {ConditionalAccessUsers} from './conditionalAccessUsers';
import {serializeConditionalAccessGuestsOrExternalUsers} from './serializeConditionalAccessGuestsOrExternalUsers';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessUsers(writer: SerializationWriter, conditionalAccessUsers: ConditionalAccessUsers | undefined = {} as ConditionalAccessUsers) : void {
        writer.writeCollectionOfPrimitiveValues<string>("excludeGroups", conditionalAccessUsers.excludeGroups);
        writer.writeObjectValue<ConditionalAccessGuestsOrExternalUsers>("excludeGuestsOrExternalUsers", conditionalAccessUsers.excludeGuestsOrExternalUsers, serializeConditionalAccessGuestsOrExternalUsers);
        writer.writeCollectionOfPrimitiveValues<string>("excludeRoles", conditionalAccessUsers.excludeRoles);
        writer.writeCollectionOfPrimitiveValues<string>("excludeUsers", conditionalAccessUsers.excludeUsers);
        writer.writeCollectionOfPrimitiveValues<string>("includeGroups", conditionalAccessUsers.includeGroups);
        writer.writeObjectValue<ConditionalAccessGuestsOrExternalUsers>("includeGuestsOrExternalUsers", conditionalAccessUsers.includeGuestsOrExternalUsers, serializeConditionalAccessGuestsOrExternalUsers);
        writer.writeCollectionOfPrimitiveValues<string>("includeRoles", conditionalAccessUsers.includeRoles);
        writer.writeCollectionOfPrimitiveValues<string>("includeUsers", conditionalAccessUsers.includeUsers);
        writer.writeStringValue("@odata.type", conditionalAccessUsers.odataType);
        writer.writeAdditionalData(conditionalAccessUsers.additionalData);
}
