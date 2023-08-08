import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DelegatedAdminServiceManagementDetail} from './delegatedAdminServiceManagementDetail';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminServiceManagementDetailCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DelegatedAdminServiceManagementDetail[] | undefined;
}
