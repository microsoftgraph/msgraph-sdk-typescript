import {Entity} from './entity';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';

export interface WorkbookChartGridlinesFormat extends Entity{
    /** Represents chart line formatting. Read-only. */
    line?:WorkbookChartLineFormat | undefined;
}
