import {DelegatedAdminCustomer} from './delegatedAdminCustomer';
import {DelegatedAdminServiceManagementDetail} from './delegatedAdminServiceManagementDetail';
import {serializeDelegatedAdminServiceManagementDetail} from './serializeDelegatedAdminServiceManagementDetail';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminCustomer(writer: SerializationWriter, delegatedAdminCustomer: DelegatedAdminCustomer | undefined = {} as DelegatedAdminCustomer) : void {
        serializeEntity(writer, delegatedAdminCustomer)
        writer.writeStringValue("displayName", delegatedAdminCustomer.displayName);
        writer.writeCollectionOfObjectValues<DelegatedAdminServiceManagementDetail>("serviceManagementDetails", delegatedAdminCustomer.serviceManagementDetails, serializeDelegatedAdminServiceManagementDetail);
        writer.writeStringValue("tenantId", delegatedAdminCustomer.tenantId);
}
