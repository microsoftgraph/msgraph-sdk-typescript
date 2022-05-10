import {IdentityUserFlowImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlowImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityUserFlowImpl();
}
