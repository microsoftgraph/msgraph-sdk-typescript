import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type LinkedResource } from './linkedResource';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface LinkedResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LinkedResource[] | undefined;
}
