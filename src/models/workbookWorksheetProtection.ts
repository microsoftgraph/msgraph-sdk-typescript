import {Entity} from './entity';
import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';

export interface WorkbookWorksheetProtection extends Entity{
    /** Sheet protection options. Read-only. */
    options?:WorkbookWorksheetProtectionOptions | undefined;
    /** Indicates if the worksheet is protected.  Read-only. */
    protected?:boolean | undefined;
}
