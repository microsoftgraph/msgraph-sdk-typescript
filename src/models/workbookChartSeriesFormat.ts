import {Entity} from './entity';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartSeriesFormat extends Entity, Parsable {
    /**
     * Represents the fill format of a chart series, which includes background formating information. Read-only.
     */
    fill?: WorkbookChartFill | undefined;
    /**
     * Represents line formatting. Read-only.
     */
    line?: WorkbookChartLineFormat | undefined;
}
