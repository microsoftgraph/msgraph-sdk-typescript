import {IdentityProviderBase} from './identityProviderBase';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProviderBase(identityProviderBase: IdentityProviderBase | undefined = {} as IdentityProviderBase, writer: SerializationWriter) : void {
        serializeEntity(writer, identityProviderBase)
        writer.writeStringValue("displayName", identityProviderBase.displayName);
}
