import type {AzureAdPopTokenAuthentication} from './azureAdPopTokenAuthentication';
import {deserializeIntoCustomExtensionAuthenticationConfiguration} from './deserializeIntoCustomExtensionAuthenticationConfiguration';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAzureAdPopTokenAuthentication(azureAdPopTokenAuthentication: AzureAdPopTokenAuthentication | undefined = {} as AzureAdPopTokenAuthentication) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCustomExtensionAuthenticationConfiguration(azureAdPopTokenAuthentication),
    }
}
