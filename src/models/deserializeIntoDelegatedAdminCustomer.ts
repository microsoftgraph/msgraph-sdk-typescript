import {createDelegatedAdminServiceManagementDetailFromDiscriminatorValue} from './createDelegatedAdminServiceManagementDetailFromDiscriminatorValue';
import type {DelegatedAdminCustomer} from './delegatedAdminCustomer';
import type {DelegatedAdminServiceManagementDetail} from './delegatedAdminServiceManagementDetail';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeDelegatedAdminServiceManagementDetail} from './serializeDelegatedAdminServiceManagementDetail';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminCustomer(delegatedAdminCustomer: DelegatedAdminCustomer | undefined = {} as DelegatedAdminCustomer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(delegatedAdminCustomer),
        "displayName": n => { delegatedAdminCustomer.displayName = n.getStringValue(); },
        "serviceManagementDetails": n => { delegatedAdminCustomer.serviceManagementDetails = n.getCollectionOfObjectValues<DelegatedAdminServiceManagementDetail>(createDelegatedAdminServiceManagementDetailFromDiscriminatorValue); },
        "tenantId": n => { delegatedAdminCustomer.tenantId = n.getStringValue(); },
    }
}
