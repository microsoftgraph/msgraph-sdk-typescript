import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DelegatedAdminServiceManagementDetail} from './delegatedAdminServiceManagementDetail';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminServiceManagementDetailCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DelegatedAdminServiceManagementDetail[] | undefined;
}
