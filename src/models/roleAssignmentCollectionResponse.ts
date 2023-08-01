import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {RoleAssignment} from './roleAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoleAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RoleAssignment[] | undefined;
}
