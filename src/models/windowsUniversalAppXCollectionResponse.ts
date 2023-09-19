import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WindowsUniversalAppX } from './windowsUniversalAppX';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WindowsUniversalAppXCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsUniversalAppX[] | undefined;
}
