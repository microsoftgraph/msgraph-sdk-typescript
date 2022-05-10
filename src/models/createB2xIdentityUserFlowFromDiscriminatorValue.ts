import {B2xIdentityUserFlowImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createB2xIdentityUserFlowFromDiscriminatorValue(parseNode: ParseNode | undefined) : B2xIdentityUserFlowImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new B2xIdentityUserFlowImpl();
}
