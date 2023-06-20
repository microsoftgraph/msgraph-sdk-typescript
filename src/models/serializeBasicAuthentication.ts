import {BasicAuthentication} from './basicAuthentication';
import {serializeApiAuthenticationConfigurationBase} from './serializeApiAuthenticationConfigurationBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBasicAuthentication(basicAuthentication: BasicAuthentication | undefined = {} as BasicAuthentication, writer: SerializationWriter) : void {
        serializeApiAuthenticationConfigurationBase(writer, basicAuthentication)
        writer.writeStringValue("password", basicAuthentication.password);
        writer.writeStringValue("username", basicAuthentication.username);
}
