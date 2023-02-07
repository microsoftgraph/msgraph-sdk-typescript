import {DelegatedAdminServiceManagementDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminServiceManagementDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminServiceManagementDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminServiceManagementDetail();
}
