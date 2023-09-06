import { createDelegatedAdminServiceManagementDetailFromDiscriminatorValue } from './createDelegatedAdminServiceManagementDetailFromDiscriminatorValue';
import { type DelegatedAdminServiceManagementDetail } from './delegatedAdminServiceManagementDetail';
import { type DelegatedAdminServiceManagementDetailCollectionResponse } from './delegatedAdminServiceManagementDetailCollectionResponse';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeDelegatedAdminServiceManagementDetail } from './serializeDelegatedAdminServiceManagementDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminServiceManagementDetailCollectionResponse(delegatedAdminServiceManagementDetailCollectionResponse: DelegatedAdminServiceManagementDetailCollectionResponse | undefined = {} as DelegatedAdminServiceManagementDetailCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminServiceManagementDetailCollectionResponse),
        "value": n => { delegatedAdminServiceManagementDetailCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminServiceManagementDetail>(createDelegatedAdminServiceManagementDetailFromDiscriminatorValue); },
    }
}
