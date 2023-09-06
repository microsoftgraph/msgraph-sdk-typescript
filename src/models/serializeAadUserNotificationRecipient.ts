import { type AadUserNotificationRecipient } from './aadUserNotificationRecipient';
import { serializeTeamworkNotificationRecipient } from './serializeTeamworkNotificationRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAadUserNotificationRecipient(writer: SerializationWriter, aadUserNotificationRecipient: AadUserNotificationRecipient | undefined = {} as AadUserNotificationRecipient) : void {
        serializeTeamworkNotificationRecipient(writer, aadUserNotificationRecipient)
        writer.writeStringValue("userId", aadUserNotificationRecipient.userId);
}
