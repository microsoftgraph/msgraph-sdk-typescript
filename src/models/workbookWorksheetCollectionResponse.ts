import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {WorkbookWorksheet} from './workbookWorksheet';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheetCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookWorksheet[] | undefined;
}
