import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DelegatedAdminAccessAssignment} from './delegatedAdminAccessAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminAccessAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DelegatedAdminAccessAssignment[] | undefined;
}
