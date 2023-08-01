import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DelegatedAdminCustomer} from './delegatedAdminCustomer';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminCustomerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DelegatedAdminCustomer[] | undefined;
}
