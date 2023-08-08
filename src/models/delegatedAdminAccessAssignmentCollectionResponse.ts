import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DelegatedAdminAccessAssignment} from './delegatedAdminAccessAssignment';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminAccessAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DelegatedAdminAccessAssignment[] | undefined;
}
