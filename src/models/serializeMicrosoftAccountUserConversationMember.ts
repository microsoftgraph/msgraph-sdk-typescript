import {MicrosoftAccountUserConversationMember} from './microsoftAccountUserConversationMember';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAccountUserConversationMember(writer: SerializationWriter, microsoftAccountUserConversationMember: MicrosoftAccountUserConversationMember | undefined = {} as MicrosoftAccountUserConversationMember) : void {
        serializeConversationMember(writer, microsoftAccountUserConversationMember)
        writer.writeStringValue("userId", microsoftAccountUserConversationMember.userId);
}
