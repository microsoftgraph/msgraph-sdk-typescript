import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Printer } from './printer';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PrinterCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Printer[] | undefined;
}
