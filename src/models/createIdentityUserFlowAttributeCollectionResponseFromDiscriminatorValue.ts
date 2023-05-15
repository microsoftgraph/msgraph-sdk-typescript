import {deserializeIntoIdentityUserFlowAttributeCollectionResponse} from './deserializeIntoIdentityUserFlowAttributeCollectionResponse';
import {IdentityUserFlowAttributeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityUserFlowAttributeCollectionResponse;
}
