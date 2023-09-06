import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DelegatedAdminRelationship } from './delegatedAdminRelationship';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DelegatedAdminRelationship[] | undefined;
}
