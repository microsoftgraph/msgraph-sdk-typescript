import {DelegatedAdminCustomer} from './delegatedAdminCustomer';
import {DelegatedAdminCustomerCollectionResponse} from './delegatedAdminCustomerCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminCustomer} from './serializeDelegatedAdminCustomer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminCustomerCollectionResponse(writer: SerializationWriter, delegatedAdminCustomerCollectionResponse: DelegatedAdminCustomerCollectionResponse | undefined = {} as DelegatedAdminCustomerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminCustomerCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminCustomer>("value", delegatedAdminCustomerCollectionResponse.value, serializeDelegatedAdminCustomer);
}
