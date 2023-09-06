import { deserializeIntoUnifiedGroupSourceCollectionResponse } from './deserializeIntoUnifiedGroupSourceCollectionResponse';
import { type UnifiedGroupSourceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedGroupSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedGroupSourceCollectionResponse;
}
