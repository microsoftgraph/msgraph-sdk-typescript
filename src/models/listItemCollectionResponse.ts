import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ListItem} from './listItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ListItem[] | undefined;
}
