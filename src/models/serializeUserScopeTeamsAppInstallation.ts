import { type Chat } from './chat';
import { serializeChat } from './serializeChat';
import { serializeTeamsAppInstallation } from './serializeTeamsAppInstallation';
import { type UserScopeTeamsAppInstallation } from './userScopeTeamsAppInstallation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserScopeTeamsAppInstallation(writer: SerializationWriter, userScopeTeamsAppInstallation: UserScopeTeamsAppInstallation | undefined = {} as UserScopeTeamsAppInstallation) : void {
        serializeTeamsAppInstallation(writer, userScopeTeamsAppInstallation)
        writer.writeObjectValue<Chat>("chat", userScopeTeamsAppInstallation.chat, serializeChat);
}
