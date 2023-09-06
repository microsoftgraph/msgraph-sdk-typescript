import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type TeamsAsyncOperation } from './teamsAsyncOperation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TeamsAsyncOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamsAsyncOperation[] | undefined;
}
