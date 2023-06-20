import {ChatMessagePolicyViolationPolicyTip} from './chatMessagePolicyViolationPolicyTip';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessagePolicyViolationPolicyTip(chatMessagePolicyViolationPolicyTip: ChatMessagePolicyViolationPolicyTip | undefined = {} as ChatMessagePolicyViolationPolicyTip, writer: SerializationWriter) : void {
        writer.writeStringValue("complianceUrl", chatMessagePolicyViolationPolicyTip.complianceUrl);
        writer.writeStringValue("generalText", chatMessagePolicyViolationPolicyTip.generalText);
        writer.writeCollectionOfPrimitiveValues<string>("matchedConditionDescriptions", chatMessagePolicyViolationPolicyTip.matchedConditionDescriptions);
        writer.writeStringValue("@odata.type", chatMessagePolicyViolationPolicyTip.odataType);
        writer.writeAdditionalData(chatMessagePolicyViolationPolicyTip.additionalData);
}
