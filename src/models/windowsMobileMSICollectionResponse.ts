import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WindowsMobileMSI } from './windowsMobileMSI';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WindowsMobileMSICollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsMobileMSI[] | undefined;
}
