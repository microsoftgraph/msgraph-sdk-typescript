import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WindowsAppX } from './windowsAppX';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WindowsAppXCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsAppX[] | undefined;
}
