import {Entity} from './entity';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartGridlinesFormat extends Entity, Parsable {
    /**
     * Represents chart line formatting. Read-only.
     */
    line?: WorkbookChartLineFormat | undefined;
}
