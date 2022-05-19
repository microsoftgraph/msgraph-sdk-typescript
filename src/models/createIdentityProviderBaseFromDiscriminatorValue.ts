import {IdentityProviderBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProviderBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.identityProviderBase":
                    return new IdentityProviderBase();
            }
        }
    }
    return new IdentityProviderBase();
}
