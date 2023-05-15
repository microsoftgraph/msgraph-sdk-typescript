import {deserializeIntoAttributeSetCollectionResponse} from './deserializeIntoAttributeSetCollectionResponse';
import {AttributeSetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeSetCollectionResponse;
}
