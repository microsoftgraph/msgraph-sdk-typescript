import { deserializeIntoEdiscoveryCaseCollectionResponse } from './deserializeIntoEdiscoveryCaseCollectionResponse';
import { type EdiscoveryCaseCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryCaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryCaseCollectionResponse;
}
