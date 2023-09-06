import { deserializeIntoDelegatedAdminServiceManagementDetail } from './deserializeIntoDelegatedAdminServiceManagementDetail';
import { type DelegatedAdminServiceManagementDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedAdminServiceManagementDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminServiceManagementDetail;
}
