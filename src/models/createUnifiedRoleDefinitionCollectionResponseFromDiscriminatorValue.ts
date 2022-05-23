import {UnifiedRoleDefinitionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleDefinitionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleDefinitionCollectionResponseImpl();
}
