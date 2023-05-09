import {IdentityProvider} from './identityProvider';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProvider(writer: SerializationWriter, identityProvider: IdentityProvider | undefined = {} as IdentityProvider) : void {
        serializeEntity(writer, identityProvider)
        writer.writeStringValue("clientId", identityProvider.clientId);
        writer.writeStringValue("clientSecret", identityProvider.clientSecret);
        writer.writeStringValue("name", identityProvider.name);
        writer.writeStringValue("type", identityProvider.type);
}
