import {DelegatedAdminServiceManagementDetail} from './delegatedAdminServiceManagementDetail';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminServiceManagementDetail(delegatedAdminServiceManagementDetail: DelegatedAdminServiceManagementDetail | undefined = {} as DelegatedAdminServiceManagementDetail, writer: SerializationWriter) : void {
        serializeEntity(writer, delegatedAdminServiceManagementDetail)
        writer.writeStringValue("serviceManagementUrl", delegatedAdminServiceManagementDetail.serviceManagementUrl);
        writer.writeStringValue("serviceName", delegatedAdminServiceManagementDetail.serviceName);
}
