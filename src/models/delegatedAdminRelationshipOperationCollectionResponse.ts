import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DelegatedAdminRelationshipOperation} from './delegatedAdminRelationshipOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DelegatedAdminRelationshipOperation[] | undefined;
}
