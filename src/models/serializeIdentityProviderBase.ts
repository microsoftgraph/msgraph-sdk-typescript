import type {IdentityProviderBase} from './identityProviderBase';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProviderBase(writer: SerializationWriter, identityProviderBase: IdentityProviderBase | undefined = {} as IdentityProviderBase) : void {
        serializeEntity(writer, identityProviderBase)
        writer.writeStringValue("displayName", identityProviderBase.displayName);
}
