import {Entity} from './entity';
import {WorkbookChartFont} from './workbookChartFont';

export interface WorkbookChartAxisTitleFormat extends Entity{
    /** Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only. */
    font?:WorkbookChartFont | undefined;
}
