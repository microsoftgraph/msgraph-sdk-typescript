import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createB2xIdentityUserFlowFromDiscriminatorValue(parseNode: ParseNode | undefined) : B2xIdentityUserFlow {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new B2xIdentityUserFlow();
}
