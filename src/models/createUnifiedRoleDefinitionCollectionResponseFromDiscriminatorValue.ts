import {deserializeIntoUnifiedRoleDefinitionCollectionResponse} from './deserializeIntoUnifiedRoleDefinitionCollectionResponse';
import {UnifiedRoleDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleDefinitionCollectionResponse;
}
