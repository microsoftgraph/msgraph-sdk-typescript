import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type PrintTaskTrigger } from './printTaskTrigger';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PrintTaskTriggerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintTaskTrigger[] | undefined;
}
