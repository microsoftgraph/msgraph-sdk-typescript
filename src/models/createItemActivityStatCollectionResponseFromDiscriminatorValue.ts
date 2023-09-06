import { deserializeIntoItemActivityStatCollectionResponse } from './deserializeIntoItemActivityStatCollectionResponse';
import { type ItemActivityStatCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createItemActivityStatCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemActivityStatCollectionResponse;
}
