import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TeamsAsyncOperation} from './teamsAsyncOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAsyncOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamsAsyncOperation[] | undefined;
}
