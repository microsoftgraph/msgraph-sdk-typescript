import {Entity} from './entity';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';

export interface WorkbookChartDataLabelFormat extends Entity{
    /** Represents the fill format of the current chart data label. Read-only. */
    fill?:WorkbookChartFill | undefined;
    /** Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only. */
    font?:WorkbookChartFont | undefined;
}
