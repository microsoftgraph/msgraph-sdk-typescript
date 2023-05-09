import {deserializeIntoUnifiedRbacResourceActionCollectionResponse} from './deserializeIntoUnifiedRbacResourceActionCollectionResponse';
import {UnifiedRbacResourceActionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceActionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRbacResourceActionCollectionResponse;
}
