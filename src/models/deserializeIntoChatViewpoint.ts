import {ChatViewpoint} from './chatViewpoint';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatViewpoint(chatViewpoint: ChatViewpoint | undefined = {} as ChatViewpoint) : Record<string, (node: ParseNode) => void> {
    return {
        "isHidden": n => { chatViewpoint.isHidden = n.getBooleanValue(); },
        "lastMessageReadDateTime": n => { chatViewpoint.lastMessageReadDateTime = n.getDateValue(); },
        "@odata.type": n => { chatViewpoint.odataType = n.getStringValue(); },
    }
}
