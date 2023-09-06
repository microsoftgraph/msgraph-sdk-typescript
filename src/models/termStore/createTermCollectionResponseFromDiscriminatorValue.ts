import { deserializeIntoTermCollectionResponse } from './deserializeIntoTermCollectionResponse';
import { type TermCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTermCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermCollectionResponse;
}
