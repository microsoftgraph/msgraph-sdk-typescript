import {IdentityProviderBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProviderBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.identityProviderBase":
                    return new IdentityProviderBaseImpl();
            }
        }
    }
    return new IdentityProviderBaseImpl();
}
