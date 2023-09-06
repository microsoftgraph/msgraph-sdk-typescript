import { type TeamworkNotificationRecipient } from './teamworkNotificationRecipient';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamworkNotificationRecipient(writer: SerializationWriter, teamworkNotificationRecipient: TeamworkNotificationRecipient | undefined = {} as TeamworkNotificationRecipient) : void {
        writer.writeStringValue("@odata.type", teamworkNotificationRecipient.odataType);
        writer.writeAdditionalData(teamworkNotificationRecipient.additionalData);
}
