import {AttributeSetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttributeSetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttributeSetCollectionResponse();
}
