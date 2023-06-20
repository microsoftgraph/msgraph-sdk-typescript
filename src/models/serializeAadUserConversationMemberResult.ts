import {AadUserConversationMemberResult} from './aadUserConversationMemberResult';
import {serializeActionResultPart} from './serializeActionResultPart';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAadUserConversationMemberResult(aadUserConversationMemberResult: AadUserConversationMemberResult | undefined = {} as AadUserConversationMemberResult, writer: SerializationWriter) : void {
        serializeActionResultPart(writer, aadUserConversationMemberResult)
        writer.writeStringValue("userId", aadUserConversationMemberResult.userId);
}
