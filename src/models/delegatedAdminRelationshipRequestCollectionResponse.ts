import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DelegatedAdminRelationshipRequest} from './delegatedAdminRelationshipRequest';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DelegatedAdminRelationshipRequest[] | undefined;
}
