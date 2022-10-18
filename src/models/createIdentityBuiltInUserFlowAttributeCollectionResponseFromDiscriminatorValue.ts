import {IdentityBuiltInUserFlowAttributeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityBuiltInUserFlowAttributeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityBuiltInUserFlowAttributeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityBuiltInUserFlowAttributeCollectionResponse();
}
