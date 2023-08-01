import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {WorkbookTable} from './workbookTable';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookTable[] | undefined;
}
