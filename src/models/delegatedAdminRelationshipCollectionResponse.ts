import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DelegatedAdminRelationship} from './delegatedAdminRelationship';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DelegatedAdminRelationship[] | undefined;
}
