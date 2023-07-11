import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {BaseItem} from './baseItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BaseItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BaseItem[] | undefined;
}
