import { deserializeIntoQueryResponse } from './deserializeIntoQueryResponse';
import { type QueryResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createQueryResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoQueryResponse;
}
