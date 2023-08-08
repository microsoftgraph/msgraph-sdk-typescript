import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {BaseItem} from './baseItem';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface BaseItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BaseItem[] | undefined;
}
