import {Entity} from './entity';
import {WorkbookSortField} from './workbookSortField';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableSort extends Entity, Parsable {
    /**
     * Represents the current conditions used to last sort the table. Read-only.
     */
    fields?: WorkbookSortField[] | undefined;
    /**
     * Represents whether the casing impacted the last sort of the table. Read-only.
     */
    matchCase?: boolean | undefined;
    /**
     * Represents Chinese character ordering method last used to sort the table. The possible values are: PinYin, StrokeCount. Read-only.
     */
    method?: string | undefined;
}
