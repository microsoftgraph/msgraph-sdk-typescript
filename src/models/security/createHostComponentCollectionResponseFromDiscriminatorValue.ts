import { deserializeIntoHostComponentCollectionResponse } from './deserializeIntoHostComponentCollectionResponse';
import { type HostComponentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostComponentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostComponentCollectionResponse;
}
