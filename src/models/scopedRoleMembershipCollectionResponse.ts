import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ScopedRoleMembershipCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ScopedRoleMembership[] | undefined;
}
