import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DelegatedAdminRelationshipOperation} from './delegatedAdminRelationshipOperation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DelegatedAdminRelationshipOperation[] | undefined;
}
