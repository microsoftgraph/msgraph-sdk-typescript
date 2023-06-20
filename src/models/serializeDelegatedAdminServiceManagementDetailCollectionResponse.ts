import {DelegatedAdminServiceManagementDetail} from './delegatedAdminServiceManagementDetail';
import {DelegatedAdminServiceManagementDetailCollectionResponse} from './delegatedAdminServiceManagementDetailCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminServiceManagementDetail} from './serializeDelegatedAdminServiceManagementDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminServiceManagementDetailCollectionResponse(delegatedAdminServiceManagementDetailCollectionResponse: DelegatedAdminServiceManagementDetailCollectionResponse | undefined = {} as DelegatedAdminServiceManagementDetailCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminServiceManagementDetailCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminServiceManagementDetail>("value", delegatedAdminServiceManagementDetailCollectionResponse.value, serializeDelegatedAdminServiceManagementDetail);
}
