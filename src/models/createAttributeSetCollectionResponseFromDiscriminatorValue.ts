import { deserializeIntoAttributeSetCollectionResponse } from './deserializeIntoAttributeSetCollectionResponse';
import { type AttributeSetCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttributeSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeSetCollectionResponse;
}
