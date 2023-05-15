import {deserializeIntoUnifiedGroupSourceCollectionResponse} from './deserializeIntoUnifiedGroupSourceCollectionResponse';
import {UnifiedGroupSourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedGroupSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedGroupSourceCollectionResponse;
}
