import { deserializeIntoRunCollectionResponse } from './deserializeIntoRunCollectionResponse';
import { type RunCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRunCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRunCollectionResponse;
}
