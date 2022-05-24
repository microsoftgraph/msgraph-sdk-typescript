import {Entity} from './entity';
import {WorkbookChartTitleFormat} from './workbookChartTitleFormat';

export interface WorkbookChartTitle extends Entity{
    /** Represents the formatting of a chart title, which includes fill and font formatting. Read-only. */
    format?:WorkbookChartTitleFormat | undefined;
    /** Boolean value representing if the chart title will overlay the chart or not. */
    overlay?:boolean | undefined;
    /** Represents the title text of a chart. */
    text?:string | undefined;
    /** A boolean value the represents the visibility of a chart title object. */
    visible?:boolean | undefined;
}
