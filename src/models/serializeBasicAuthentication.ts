import { type BasicAuthentication } from './basicAuthentication';
import { serializeApiAuthenticationConfigurationBase } from './serializeApiAuthenticationConfigurationBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBasicAuthentication(writer: SerializationWriter, basicAuthentication: BasicAuthentication | undefined = {} as BasicAuthentication) : void {
        serializeApiAuthenticationConfigurationBase(writer, basicAuthentication)
        writer.writeStringValue("password", basicAuthentication.password);
        writer.writeStringValue("username", basicAuthentication.username);
}
