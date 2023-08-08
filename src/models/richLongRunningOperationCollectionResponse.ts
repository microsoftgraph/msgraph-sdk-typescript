import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {RichLongRunningOperation} from './richLongRunningOperation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface RichLongRunningOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RichLongRunningOperation[] | undefined;
}
