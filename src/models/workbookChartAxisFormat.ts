import {Entity} from './entity';
import {WorkbookChartFont} from './workbookChartFont';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';

export interface WorkbookChartAxisFormat extends Entity{
    /** Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only. */
    font?:WorkbookChartFont | undefined;
    /** Represents chart line formatting. Read-only. */
    line?:WorkbookChartLineFormat | undefined;
}
