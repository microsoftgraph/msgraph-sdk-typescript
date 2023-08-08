import type {AadUserConversationMemberResult} from './aadUserConversationMemberResult';
import {deserializeIntoActionResultPart} from './deserializeIntoActionResultPart';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAadUserConversationMemberResult(aadUserConversationMemberResult: AadUserConversationMemberResult | undefined = {} as AadUserConversationMemberResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoActionResultPart(aadUserConversationMemberResult),
        "userId": n => { aadUserConversationMemberResult.userId = n.getStringValue(); },
    }
}
