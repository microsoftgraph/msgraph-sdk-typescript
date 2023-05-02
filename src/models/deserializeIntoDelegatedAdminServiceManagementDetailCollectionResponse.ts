import {createDelegatedAdminServiceManagementDetailFromDiscriminatorValue} from './createDelegatedAdminServiceManagementDetailFromDiscriminatorValue';
import {DelegatedAdminServiceManagementDetail} from './delegatedAdminServiceManagementDetail';
import {DelegatedAdminServiceManagementDetailCollectionResponse} from './delegatedAdminServiceManagementDetailCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminServiceManagementDetail} from './serializeDelegatedAdminServiceManagementDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminServiceManagementDetailCollectionResponse(delegatedAdminServiceManagementDetailCollectionResponse: DelegatedAdminServiceManagementDetailCollectionResponse | undefined = {} as DelegatedAdminServiceManagementDetailCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminServiceManagementDetailCollectionResponse),
        "value": n => { delegatedAdminServiceManagementDetailCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminServiceManagementDetail>(createDelegatedAdminServiceManagementDetailFromDiscriminatorValue); },
    }
}
