import {Entity} from './entity';
import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheetProtection extends Entity, Parsable {
    /**
     * Sheet protection options. Read-only.
     */
    options?: WorkbookWorksheetProtectionOptions | undefined;
    /**
     * Indicates if the worksheet is protected.  Read-only.
     */
    protected?: boolean | undefined;
}
