import {Entity} from './entity';
import {Json} from './json';

export interface WorkbookTableRow extends Entity{
    /** Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only. */
    index?:number | undefined;
    /** Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
    values?:Json | undefined;
}
