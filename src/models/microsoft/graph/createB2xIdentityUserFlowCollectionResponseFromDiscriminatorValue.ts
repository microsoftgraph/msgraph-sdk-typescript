import {B2xIdentityUserFlowCollectionResponse} from './b2xIdentityUserFlowCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createB2xIdentityUserFlowCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : B2xIdentityUserFlowCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new B2xIdentityUserFlowCollectionResponse();
}
