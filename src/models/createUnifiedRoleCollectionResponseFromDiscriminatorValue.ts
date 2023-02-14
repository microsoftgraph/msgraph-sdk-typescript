import {UnifiedRoleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleCollectionResponse();
}
