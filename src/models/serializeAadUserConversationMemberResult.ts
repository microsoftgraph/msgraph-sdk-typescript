import {AadUserConversationMemberResult} from './aadUserConversationMemberResult';
import {serializeActionResultPart} from './serializeActionResultPart';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAadUserConversationMemberResult(writer: SerializationWriter, aadUserConversationMemberResult: AadUserConversationMemberResult | undefined = {} as AadUserConversationMemberResult) : void {
        serializeActionResultPart(writer, aadUserConversationMemberResult)
        writer.writeStringValue("userId", aadUserConversationMemberResult.userId);
}
