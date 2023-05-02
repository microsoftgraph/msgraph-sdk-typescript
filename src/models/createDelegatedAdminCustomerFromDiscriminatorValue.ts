import {deserializeIntoDelegatedAdminCustomer} from './deserializeIntoDelegatedAdminCustomer';
import {DelegatedAdminCustomer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminCustomerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminCustomer;
}
