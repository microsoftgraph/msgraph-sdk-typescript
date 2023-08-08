import type {TeamworkNotificationRecipient} from './teamworkNotificationRecipient';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkNotificationRecipient(teamworkNotificationRecipient: TeamworkNotificationRecipient | undefined = {} as TeamworkNotificationRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { teamworkNotificationRecipient.odataType = n.getStringValue(); },
    }
}
