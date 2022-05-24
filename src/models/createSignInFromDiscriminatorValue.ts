import {SignInImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignInImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.signIn":
                    return new SignInImpl();
            }
        }
    }
    return new SignInImpl();
}
