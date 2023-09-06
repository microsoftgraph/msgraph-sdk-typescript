import { type ChatMessagePolicyViolationPolicyTip } from './chatMessagePolicyViolationPolicyTip';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatMessagePolicyViolationPolicyTip(writer: SerializationWriter, chatMessagePolicyViolationPolicyTip: ChatMessagePolicyViolationPolicyTip | undefined = {} as ChatMessagePolicyViolationPolicyTip) : void {
        writer.writeStringValue("complianceUrl", chatMessagePolicyViolationPolicyTip.complianceUrl);
        writer.writeStringValue("generalText", chatMessagePolicyViolationPolicyTip.generalText);
        writer.writeCollectionOfPrimitiveValues<string>("matchedConditionDescriptions", chatMessagePolicyViolationPolicyTip.matchedConditionDescriptions);
        writer.writeStringValue("@odata.type", chatMessagePolicyViolationPolicyTip.odataType);
        writer.writeAdditionalData(chatMessagePolicyViolationPolicyTip.additionalData);
}
