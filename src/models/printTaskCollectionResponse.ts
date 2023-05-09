import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrintTask} from './printTask';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PrintTask[] | undefined;
}
