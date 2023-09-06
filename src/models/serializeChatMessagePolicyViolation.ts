import { type ChatMessagePolicyViolation } from './chatMessagePolicyViolation';
import { ChatMessagePolicyViolationDlpActionTypes } from './chatMessagePolicyViolationDlpActionTypes';
import { type ChatMessagePolicyViolationPolicyTip } from './chatMessagePolicyViolationPolicyTip';
import { ChatMessagePolicyViolationUserActionTypes } from './chatMessagePolicyViolationUserActionTypes';
import { ChatMessagePolicyViolationVerdictDetailsTypes } from './chatMessagePolicyViolationVerdictDetailsTypes';
import { serializeChatMessagePolicyViolationPolicyTip } from './serializeChatMessagePolicyViolationPolicyTip';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatMessagePolicyViolation(writer: SerializationWriter, chatMessagePolicyViolation: ChatMessagePolicyViolation | undefined = {} as ChatMessagePolicyViolation) : void {
        writer.writeEnumValue<ChatMessagePolicyViolationDlpActionTypes[]>("dlpAction", chatMessagePolicyViolation.dlpAction);
        writer.writeStringValue("justificationText", chatMessagePolicyViolation.justificationText);
        writer.writeStringValue("@odata.type", chatMessagePolicyViolation.odataType);
        writer.writeObjectValue<ChatMessagePolicyViolationPolicyTip>("policyTip", chatMessagePolicyViolation.policyTip, serializeChatMessagePolicyViolationPolicyTip);
        writer.writeEnumValue<ChatMessagePolicyViolationUserActionTypes[]>("userAction", chatMessagePolicyViolation.userAction);
        writer.writeEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes[]>("verdictDetails", chatMessagePolicyViolation.verdictDetails);
        writer.writeAdditionalData(chatMessagePolicyViolation.additionalData);
}
