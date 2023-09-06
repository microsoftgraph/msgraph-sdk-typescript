import { type AadUserConversationMemberResult } from './aadUserConversationMemberResult';
import { serializeActionResultPart } from './serializeActionResultPart';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAadUserConversationMemberResult(writer: SerializationWriter, aadUserConversationMemberResult: AadUserConversationMemberResult | undefined = {} as AadUserConversationMemberResult) : void {
        serializeActionResultPart(writer, aadUserConversationMemberResult)
        writer.writeStringValue("userId", aadUserConversationMemberResult.userId);
}
