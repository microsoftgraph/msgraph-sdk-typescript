import { deserializeIntoSectionGroupCollectionResponse } from './deserializeIntoSectionGroupCollectionResponse';
import { type SectionGroupCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSectionGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSectionGroupCollectionResponse;
}
