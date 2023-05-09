import {ChatMessagePolicyViolation} from './chatMessagePolicyViolation';
import {ChatMessagePolicyViolationDlpActionTypes} from './chatMessagePolicyViolationDlpActionTypes';
import {ChatMessagePolicyViolationPolicyTip} from './chatMessagePolicyViolationPolicyTip';
import {ChatMessagePolicyViolationUserActionTypes} from './chatMessagePolicyViolationUserActionTypes';
import {ChatMessagePolicyViolationVerdictDetailsTypes} from './chatMessagePolicyViolationVerdictDetailsTypes';
import {createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue} from './createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue';
import {serializeChatMessagePolicyViolationPolicyTip} from './serializeChatMessagePolicyViolationPolicyTip';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessagePolicyViolation(chatMessagePolicyViolation: ChatMessagePolicyViolation | undefined = {} as ChatMessagePolicyViolation) : Record<string, (node: ParseNode) => void> {
    return {
        "dlpAction": n => { chatMessagePolicyViolation.dlpAction = n.getEnumValue<ChatMessagePolicyViolationDlpActionTypes>(ChatMessagePolicyViolationDlpActionTypes); },
        "justificationText": n => { chatMessagePolicyViolation.justificationText = n.getStringValue(); },
        "@odata.type": n => { chatMessagePolicyViolation.odataType = n.getStringValue(); },
        "policyTip": n => { chatMessagePolicyViolation.policyTip = n.getObjectValue<ChatMessagePolicyViolationPolicyTip>(createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue); },
        "userAction": n => { chatMessagePolicyViolation.userAction = n.getEnumValue<ChatMessagePolicyViolationUserActionTypes>(ChatMessagePolicyViolationUserActionTypes); },
        "verdictDetails": n => { chatMessagePolicyViolation.verdictDetails = n.getEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes>(ChatMessagePolicyViolationVerdictDetailsTypes); },
    }
}
