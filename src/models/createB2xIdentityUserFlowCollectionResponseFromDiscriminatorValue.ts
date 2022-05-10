import {B2xIdentityUserFlowCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createB2xIdentityUserFlowCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : B2xIdentityUserFlowCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new B2xIdentityUserFlowCollectionResponseImpl();
}
