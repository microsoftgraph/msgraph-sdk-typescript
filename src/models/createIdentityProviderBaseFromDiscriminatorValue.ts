import {AppleManagedIdentityProviderImpl, BuiltInIdentityProviderImpl, IdentityProviderBaseImpl, SamlOrWsFedProviderImpl, SocialIdentityProviderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProviderBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.appleManagedIdentityProvider":
                    return new AppleManagedIdentityProviderImpl();
                case "#microsoft.graph.builtInIdentityProvider":
                    return new BuiltInIdentityProviderImpl();
                case "#microsoft.graph.samlOrWsFedProvider":
                    return new SamlOrWsFedProviderImpl();
                case "#microsoft.graph.socialIdentityProvider":
                    return new SocialIdentityProviderImpl();
            }
        }
    }
    return new IdentityProviderBaseImpl();
}
