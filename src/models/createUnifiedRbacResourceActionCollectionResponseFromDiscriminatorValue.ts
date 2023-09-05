import { deserializeIntoUnifiedRbacResourceActionCollectionResponse } from './deserializeIntoUnifiedRbacResourceActionCollectionResponse';
import { type UnifiedRbacResourceActionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceActionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRbacResourceActionCollectionResponse;
}
