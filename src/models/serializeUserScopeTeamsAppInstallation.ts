import {Chat} from './chat';
import {serializeChat} from './serializeChat';
import {serializeTeamsAppInstallation} from './serializeTeamsAppInstallation';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserScopeTeamsAppInstallation(writer: SerializationWriter, userScopeTeamsAppInstallation: UserScopeTeamsAppInstallation | undefined = {} as UserScopeTeamsAppInstallation) : void {
        serializeTeamsAppInstallation(writer, userScopeTeamsAppInstallation)
        writer.writeObjectValue<Chat>("chat", userScopeTeamsAppInstallation.chat, serializeChat);
}
