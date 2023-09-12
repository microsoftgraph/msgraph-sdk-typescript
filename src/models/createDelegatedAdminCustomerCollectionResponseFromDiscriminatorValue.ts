import { deserializeIntoDelegatedAdminCustomerCollectionResponse } from './deserializeIntoDelegatedAdminCustomerCollectionResponse';
import { type DelegatedAdminCustomerCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedAdminCustomerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminCustomerCollectionResponse;
}
