import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Call } from './call';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CallCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Call[] | undefined;
}
