import type {TeamworkNotificationRecipient} from './teamworkNotificationRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkNotificationRecipient(writer: SerializationWriter, teamworkNotificationRecipient: TeamworkNotificationRecipient | undefined = {} as TeamworkNotificationRecipient) : void {
        writer.writeStringValue("@odata.type", teamworkNotificationRecipient.odataType);
        writer.writeAdditionalData(teamworkNotificationRecipient.additionalData);
}
