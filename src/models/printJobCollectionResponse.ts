import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type PrintJob } from './printJob';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PrintJobCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintJob[] | undefined;
}
