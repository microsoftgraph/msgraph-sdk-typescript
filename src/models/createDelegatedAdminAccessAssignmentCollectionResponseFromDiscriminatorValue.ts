import { deserializeIntoDelegatedAdminAccessAssignmentCollectionResponse } from './deserializeIntoDelegatedAdminAccessAssignmentCollectionResponse';
import { type DelegatedAdminAccessAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedAdminAccessAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminAccessAssignmentCollectionResponse;
}
