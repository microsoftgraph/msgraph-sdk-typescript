import { deserializeIntoPermissionGrantConditionSetCollectionResponse } from './deserializeIntoPermissionGrantConditionSetCollectionResponse';
import { type PermissionGrantConditionSetCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPermissionGrantConditionSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermissionGrantConditionSetCollectionResponse;
}
