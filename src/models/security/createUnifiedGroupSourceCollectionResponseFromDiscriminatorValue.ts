import {UnifiedGroupSourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedGroupSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedGroupSourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedGroupSourceCollectionResponse();
}
