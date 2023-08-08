import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PrintTask} from './printTask';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintTask[] | undefined;
}
