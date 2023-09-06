import { type AzureAdPopTokenAuthentication } from './azureAdPopTokenAuthentication';
import { serializeCustomExtensionAuthenticationConfiguration } from './serializeCustomExtensionAuthenticationConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAzureAdPopTokenAuthentication(writer: SerializationWriter, azureAdPopTokenAuthentication: AzureAdPopTokenAuthentication | undefined = {} as AzureAdPopTokenAuthentication) : void {
        serializeCustomExtensionAuthenticationConfiguration(writer, azureAdPopTokenAuthentication)
}
