import {BasicAuthentication} from './basicAuthentication';
import {serializeApiAuthenticationConfigurationBase} from './serializeApiAuthenticationConfigurationBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBasicAuthentication(writer: SerializationWriter, basicAuthentication: BasicAuthentication | undefined = {} as BasicAuthentication) : void {
        serializeApiAuthenticationConfigurationBase(writer, basicAuthentication)
        writer.writeStringValue("password", basicAuthentication.password);
        writer.writeStringValue("username", basicAuthentication.username);
}
