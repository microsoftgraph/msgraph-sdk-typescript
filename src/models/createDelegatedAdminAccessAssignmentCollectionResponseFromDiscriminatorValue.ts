import {DelegatedAdminAccessAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminAccessAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminAccessAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminAccessAssignmentCollectionResponse();
}
