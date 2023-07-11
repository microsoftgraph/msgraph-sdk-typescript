import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ListItemVersion} from './listItemVersion';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItemVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ListItemVersion[] | undefined;
}
