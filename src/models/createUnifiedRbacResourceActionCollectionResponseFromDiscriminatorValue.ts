import {UnifiedRbacResourceActionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceActionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRbacResourceActionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRbacResourceActionCollectionResponse();
}
