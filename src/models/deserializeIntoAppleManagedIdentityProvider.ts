import {AppleManagedIdentityProvider} from './appleManagedIdentityProvider';
import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppleManagedIdentityProvider(appleManagedIdentityProvider: AppleManagedIdentityProvider | undefined = {} as AppleManagedIdentityProvider) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityProviderBase(appleManagedIdentityProvider),
        "certificateData": n => { appleManagedIdentityProvider.certificateData = n.getStringValue(); },
        "developerId": n => { appleManagedIdentityProvider.developerId = n.getStringValue(); },
        "keyId": n => { appleManagedIdentityProvider.keyId = n.getStringValue(); },
        "serviceId": n => { appleManagedIdentityProvider.serviceId = n.getStringValue(); },
    }
}
