import { deserializeIntoExternalConnectionCollectionResponse } from './deserializeIntoExternalConnectionCollectionResponse';
import { type ExternalConnectionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalConnectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalConnectionCollectionResponse;
}
