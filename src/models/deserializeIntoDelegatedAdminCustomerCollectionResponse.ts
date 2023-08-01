import {createDelegatedAdminCustomerFromDiscriminatorValue} from './createDelegatedAdminCustomerFromDiscriminatorValue';
import type {DelegatedAdminCustomer} from './delegatedAdminCustomer';
import type {DelegatedAdminCustomerCollectionResponse} from './delegatedAdminCustomerCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminCustomer} from './serializeDelegatedAdminCustomer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminCustomerCollectionResponse(delegatedAdminCustomerCollectionResponse: DelegatedAdminCustomerCollectionResponse | undefined = {} as DelegatedAdminCustomerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminCustomerCollectionResponse),
        "value": n => { delegatedAdminCustomerCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminCustomer>(createDelegatedAdminCustomerFromDiscriminatorValue); },
    }
}
