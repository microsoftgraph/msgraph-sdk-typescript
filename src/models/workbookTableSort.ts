import {Entity} from './entity';
import {WorkbookSortField} from './workbookSortField';

export interface WorkbookTableSort extends Entity{
    /** Represents the current conditions used to last sort the table. Read-only. */
    fields?:WorkbookSortField[] | undefined;
    /** Represents whether the casing impacted the last sort of the table. Read-only. */
    matchCase?:boolean | undefined;
    /** Represents Chinese character ordering method last used to sort the table. Possible values are: PinYin, StrokeCount. Read-only. */
    method?:string | undefined;
}
