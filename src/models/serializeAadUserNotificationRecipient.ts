import {AadUserNotificationRecipient} from './aadUserNotificationRecipient';
import {serializeTeamworkNotificationRecipient} from './serializeTeamworkNotificationRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAadUserNotificationRecipient(aadUserNotificationRecipient: AadUserNotificationRecipient | undefined = {} as AadUserNotificationRecipient, writer: SerializationWriter) : void {
        serializeTeamworkNotificationRecipient(writer, aadUserNotificationRecipient)
        writer.writeStringValue("userId", aadUserNotificationRecipient.userId);
}
