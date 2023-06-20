import {AppleManagedIdentityProvider} from './appleManagedIdentityProvider';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppleManagedIdentityProvider(appleManagedIdentityProvider: AppleManagedIdentityProvider | undefined = {} as AppleManagedIdentityProvider, writer: SerializationWriter) : void {
        serializeIdentityProviderBase(writer, appleManagedIdentityProvider)
        writer.writeStringValue("certificateData", appleManagedIdentityProvider.certificateData);
        writer.writeStringValue("developerId", appleManagedIdentityProvider.developerId);
        writer.writeStringValue("keyId", appleManagedIdentityProvider.keyId);
        writer.writeStringValue("serviceId", appleManagedIdentityProvider.serviceId);
}
