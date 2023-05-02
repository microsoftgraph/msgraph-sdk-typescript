import {deserializeIntoDelegatedPermissionClassificationCollectionResponse} from './deserializeIntoDelegatedPermissionClassificationCollectionResponse';
import {DelegatedPermissionClassificationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedPermissionClassificationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedPermissionClassificationCollectionResponse;
}
