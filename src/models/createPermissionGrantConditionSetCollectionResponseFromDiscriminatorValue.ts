import {deserializeIntoPermissionGrantConditionSetCollectionResponse} from './deserializeIntoPermissionGrantConditionSetCollectionResponse';
import {PermissionGrantConditionSetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantConditionSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermissionGrantConditionSetCollectionResponse;
}
