import {Chat} from './chat';
import {createChatFromDiscriminatorValue} from './createChatFromDiscriminatorValue';
import {deserializeIntoTeamsAppInstallation} from './deserializeIntoTeamsAppInstallation';
import {serializeChat} from './serializeChat';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserScopeTeamsAppInstallation(userScopeTeamsAppInstallation: UserScopeTeamsAppInstallation | undefined = {} as UserScopeTeamsAppInstallation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamsAppInstallation(userScopeTeamsAppInstallation),
        "chat": n => { userScopeTeamsAppInstallation.chat = n.getObjectValue<Chat>(createChatFromDiscriminatorValue); },
    }
}
