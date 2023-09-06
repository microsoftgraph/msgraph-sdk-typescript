import { type DelegatedAdminCustomer } from './delegatedAdminCustomer';
import { type DelegatedAdminCustomerCollectionResponse } from './delegatedAdminCustomerCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDelegatedAdminCustomer } from './serializeDelegatedAdminCustomer';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminCustomerCollectionResponse(writer: SerializationWriter, delegatedAdminCustomerCollectionResponse: DelegatedAdminCustomerCollectionResponse | undefined = {} as DelegatedAdminCustomerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminCustomerCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminCustomer>("value", delegatedAdminCustomerCollectionResponse.value, serializeDelegatedAdminCustomer);
}
