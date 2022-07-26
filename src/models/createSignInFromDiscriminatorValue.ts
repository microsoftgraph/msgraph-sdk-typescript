import {RestrictedSignIn, SignIn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignIn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.restrictedSignIn":
                    return new RestrictedSignIn();
            }
        }
    }
    return new SignIn();
}
