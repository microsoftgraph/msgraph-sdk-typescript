import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {IdentityApiConnector} from './identityApiConnector';
import {serializeApiAuthenticationConfigurationBase} from './serializeApiAuthenticationConfigurationBase';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityApiConnector(writer: SerializationWriter, identityApiConnector: IdentityApiConnector | undefined = {} as IdentityApiConnector) : void {
        serializeEntity(writer, identityApiConnector)
        writer.writeObjectValue<ApiAuthenticationConfigurationBase>("authenticationConfiguration", identityApiConnector.authenticationConfiguration, serializeApiAuthenticationConfigurationBase);
        writer.writeStringValue("displayName", identityApiConnector.displayName);
        writer.writeStringValue("targetUrl", identityApiConnector.targetUrl);
}
