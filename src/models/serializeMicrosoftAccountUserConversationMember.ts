import { type MicrosoftAccountUserConversationMember } from './microsoftAccountUserConversationMember';
import { serializeConversationMember } from './serializeConversationMember';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAccountUserConversationMember(writer: SerializationWriter, microsoftAccountUserConversationMember: MicrosoftAccountUserConversationMember | undefined = {} as MicrosoftAccountUserConversationMember) : void {
        serializeConversationMember(writer, microsoftAccountUserConversationMember)
        writer.writeStringValue("userId", microsoftAccountUserConversationMember.userId);
}
