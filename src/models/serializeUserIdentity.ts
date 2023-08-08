import {serializeIdentity} from './serializeIdentity';
import type {UserIdentity} from './userIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserIdentity(writer: SerializationWriter, userIdentity: UserIdentity | undefined = {} as UserIdentity) : void {
        serializeIdentity(writer, userIdentity)
        writer.writeStringValue("ipAddress", userIdentity.ipAddress);
        writer.writeStringValue("userPrincipalName", userIdentity.userPrincipalName);
}
