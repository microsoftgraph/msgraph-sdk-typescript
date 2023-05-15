import {deserializeIntoB2xIdentityUserFlow} from './deserializeIntoB2xIdentityUserFlow';
import {B2xIdentityUserFlow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createB2xIdentityUserFlowFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoB2xIdentityUserFlow;
}
