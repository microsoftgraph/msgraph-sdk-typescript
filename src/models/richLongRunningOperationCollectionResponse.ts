import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RichLongRunningOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RichLongRunningOperation[] | undefined;
}
