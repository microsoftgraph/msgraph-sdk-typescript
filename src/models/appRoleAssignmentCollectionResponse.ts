import type {AppRoleAssignment} from './appRoleAssignment';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AppRoleAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AppRoleAssignment[] | undefined;
}
