import { deserializeIntoDelegatedAdminCustomer } from './deserializeIntoDelegatedAdminCustomer';
import { type DelegatedAdminCustomer } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedAdminCustomerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminCustomer;
}
