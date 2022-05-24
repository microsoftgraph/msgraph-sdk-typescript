import {Entity} from './entity';
import {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';

export interface WorkbookChartGridlines extends Entity{
    /** Represents the formatting of chart gridlines. Read-only. */
    format?:WorkbookChartGridlinesFormat | undefined;
    /** Boolean value representing if the axis gridlines are visible or not. */
    visible?:boolean | undefined;
}
