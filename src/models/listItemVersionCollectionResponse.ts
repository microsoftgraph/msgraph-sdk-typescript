import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ListItemVersion } from './listItemVersion';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ListItemVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ListItemVersion[] | undefined;
}
