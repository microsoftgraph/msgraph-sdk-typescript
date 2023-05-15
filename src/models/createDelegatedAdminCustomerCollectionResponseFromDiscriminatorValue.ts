import {deserializeIntoDelegatedAdminCustomerCollectionResponse} from './deserializeIntoDelegatedAdminCustomerCollectionResponse';
import {DelegatedAdminCustomerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminCustomerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminCustomerCollectionResponse;
}
