import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ScopedRoleMembership} from './scopedRoleMembership';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ScopedRoleMembershipCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ScopedRoleMembership[] | undefined;
}
