import { deserializeIntoExternalItemCollectionResponse } from './deserializeIntoExternalItemCollectionResponse';
import { type ExternalItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalItemCollectionResponse;
}
