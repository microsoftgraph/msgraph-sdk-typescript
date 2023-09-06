import { type DelegatedAdminServiceManagementDetail } from './delegatedAdminServiceManagementDetail';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminServiceManagementDetail(writer: SerializationWriter, delegatedAdminServiceManagementDetail: DelegatedAdminServiceManagementDetail | undefined = {} as DelegatedAdminServiceManagementDetail) : void {
        serializeEntity(writer, delegatedAdminServiceManagementDetail)
        writer.writeStringValue("serviceManagementUrl", delegatedAdminServiceManagementDetail.serviceManagementUrl);
        writer.writeStringValue("serviceName", delegatedAdminServiceManagementDetail.serviceName);
}
