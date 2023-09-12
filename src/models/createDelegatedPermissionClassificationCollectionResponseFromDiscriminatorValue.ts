import { deserializeIntoDelegatedPermissionClassificationCollectionResponse } from './deserializeIntoDelegatedPermissionClassificationCollectionResponse';
import { type DelegatedPermissionClassificationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedPermissionClassificationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedPermissionClassificationCollectionResponse;
}
