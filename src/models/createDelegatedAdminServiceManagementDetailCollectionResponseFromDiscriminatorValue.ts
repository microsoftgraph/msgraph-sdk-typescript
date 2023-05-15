import {deserializeIntoDelegatedAdminServiceManagementDetailCollectionResponse} from './deserializeIntoDelegatedAdminServiceManagementDetailCollectionResponse';
import {DelegatedAdminServiceManagementDetailCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminServiceManagementDetailCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminServiceManagementDetailCollectionResponse;
}
