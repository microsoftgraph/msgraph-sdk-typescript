import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DelegatedAdminRelationshipRequest} from './delegatedAdminRelationshipRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DelegatedAdminRelationshipRequest[] | undefined;
}
