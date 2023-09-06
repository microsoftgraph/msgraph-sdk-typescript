import { deserializeIntoOnenoteSectionCollectionResponse } from './deserializeIntoOnenoteSectionCollectionResponse';
import { type OnenoteSectionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenoteSectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteSectionCollectionResponse;
}
