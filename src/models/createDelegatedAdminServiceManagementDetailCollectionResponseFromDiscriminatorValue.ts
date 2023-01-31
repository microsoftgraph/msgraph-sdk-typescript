import {DelegatedAdminServiceManagementDetailCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminServiceManagementDetailCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminServiceManagementDetailCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminServiceManagementDetailCollectionResponse();
}
