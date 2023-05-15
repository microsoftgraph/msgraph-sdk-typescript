import {CallOptions} from './callOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallOptions(callOptions: CallOptions | undefined = {} as CallOptions) : Record<string, (node: ParseNode) => void> {
    return {
        "hideBotAfterEscalation": n => { callOptions.hideBotAfterEscalation = n.getBooleanValue(); },
        "isContentSharingNotificationEnabled": n => { callOptions.isContentSharingNotificationEnabled = n.getBooleanValue(); },
        "@odata.type": n => { callOptions.odataType = n.getStringValue(); },
    }
}
