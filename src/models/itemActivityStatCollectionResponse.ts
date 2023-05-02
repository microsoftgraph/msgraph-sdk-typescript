import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ItemActivityStat} from './itemActivityStat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityStatCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ItemActivityStat[] | undefined;
}
