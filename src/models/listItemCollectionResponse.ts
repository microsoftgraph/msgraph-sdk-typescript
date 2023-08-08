import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ListItem} from './listItem';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ListItem[] | undefined;
}
