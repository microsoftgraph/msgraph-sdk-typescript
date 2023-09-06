import { type Chat } from './chat';
import { createChatFromDiscriminatorValue } from './createChatFromDiscriminatorValue';
import { deserializeIntoTeamsAppInstallation } from './deserializeIntoTeamsAppInstallation';
import { serializeChat } from './serializeChat';
import { type UserScopeTeamsAppInstallation } from './userScopeTeamsAppInstallation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserScopeTeamsAppInstallation(userScopeTeamsAppInstallation: UserScopeTeamsAppInstallation | undefined = {} as UserScopeTeamsAppInstallation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamsAppInstallation(userScopeTeamsAppInstallation),
        "chat": n => { userScopeTeamsAppInstallation.chat = n.getObjectValue<Chat>(createChatFromDiscriminatorValue); },
    }
}
