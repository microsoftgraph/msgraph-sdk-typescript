import {ChatMessagePolicyViolationPolicyTip} from './chatMessagePolicyViolationPolicyTip';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessagePolicyViolationPolicyTip(chatMessagePolicyViolationPolicyTip: ChatMessagePolicyViolationPolicyTip | undefined = {} as ChatMessagePolicyViolationPolicyTip) : Record<string, (node: ParseNode) => void> {
    return {
        "complianceUrl": n => { chatMessagePolicyViolationPolicyTip.complianceUrl = n.getStringValue(); },
        "generalText": n => { chatMessagePolicyViolationPolicyTip.generalText = n.getStringValue(); },
        "matchedConditionDescriptions": n => { chatMessagePolicyViolationPolicyTip.matchedConditionDescriptions = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { chatMessagePolicyViolationPolicyTip.odataType = n.getStringValue(); },
    }
}
