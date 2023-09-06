import { type AadUserNotificationRecipient } from './aadUserNotificationRecipient';
import { deserializeIntoTeamworkNotificationRecipient } from './deserializeIntoTeamworkNotificationRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAadUserNotificationRecipient(aadUserNotificationRecipient: AadUserNotificationRecipient | undefined = {} as AadUserNotificationRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkNotificationRecipient(aadUserNotificationRecipient),
        "userId": n => { aadUserNotificationRecipient.userId = n.getStringValue(); },
    }
}
