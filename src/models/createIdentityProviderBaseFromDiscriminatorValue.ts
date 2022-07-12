import {AppleManagedIdentityProvider, BuiltInIdentityProvider, IdentityProviderBase, SamlOrWsFedProvider, SocialIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProviderBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.appleManagedIdentityProvider":
                    return new AppleManagedIdentityProvider();
                case "#microsoft.graph.builtInIdentityProvider":
                    return new BuiltInIdentityProvider();
                case "#microsoft.graph.samlOrWsFedProvider":
                    return new SamlOrWsFedProvider();
                case "#microsoft.graph.socialIdentityProvider":
                    return new SocialIdentityProvider();
            }
        }
    }
    return new IdentityProviderBase();
}
