import { deserializeIntoHostCollectionResponse } from './deserializeIntoHostCollectionResponse';
import { type HostCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostCollectionResponse;
}
