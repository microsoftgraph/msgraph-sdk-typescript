import {DelegatedAdminServiceManagementDetail} from './delegatedAdminServiceManagementDetail';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminServiceManagementDetail(delegatedAdminServiceManagementDetail: DelegatedAdminServiceManagementDetail | undefined = {} as DelegatedAdminServiceManagementDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(delegatedAdminServiceManagementDetail),
        "serviceManagementUrl": n => { delegatedAdminServiceManagementDetail.serviceManagementUrl = n.getStringValue(); },
        "serviceName": n => { delegatedAdminServiceManagementDetail.serviceName = n.getStringValue(); },
    }
}
