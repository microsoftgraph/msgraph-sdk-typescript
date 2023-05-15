import {serializeIdentity} from './serializeIdentity';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserIdentity(writer: SerializationWriter, userIdentity: UserIdentity | undefined = {} as UserIdentity) : void {
        serializeIdentity(writer, userIdentity)
        writer.writeStringValue("ipAddress", userIdentity.ipAddress);
        writer.writeStringValue("userPrincipalName", userIdentity.userPrincipalName);
}
