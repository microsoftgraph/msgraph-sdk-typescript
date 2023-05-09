import {deserializeIntoAppleManagedIdentityProvider} from './deserializeIntoAppleManagedIdentityProvider';
import {deserializeIntoBuiltInIdentityProvider} from './deserializeIntoBuiltInIdentityProvider';
import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {deserializeIntoInternalDomainFederation} from './deserializeIntoInternalDomainFederation';
import {deserializeIntoSamlOrWsFedExternalDomainFederation} from './deserializeIntoSamlOrWsFedExternalDomainFederation';
import {deserializeIntoSamlOrWsFedProvider} from './deserializeIntoSamlOrWsFedProvider';
import {deserializeIntoSocialIdentityProvider} from './deserializeIntoSocialIdentityProvider';
import {AppleManagedIdentityProvider, BuiltInIdentityProvider, IdentityProviderBase, InternalDomainFederation, SamlOrWsFedExternalDomainFederation, SamlOrWsFedProvider, SocialIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.appleManagedIdentityProvider":
                    return deserializeIntoAppleManagedIdentityProvider;
                case "#microsoft.graph.builtInIdentityProvider":
                    return deserializeIntoBuiltInIdentityProvider;
                case "#microsoft.graph.internalDomainFederation":
                    return deserializeIntoInternalDomainFederation;
                case "#microsoft.graph.samlOrWsFedExternalDomainFederation":
                    return deserializeIntoSamlOrWsFedExternalDomainFederation;
                case "#microsoft.graph.samlOrWsFedProvider":
                    return deserializeIntoSamlOrWsFedProvider;
                case "#microsoft.graph.socialIdentityProvider":
                    return deserializeIntoSocialIdentityProvider;
            }
        }
    }
    return deserializeIntoIdentityProviderBase;
}
