import {Entity} from './entity';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';

export interface WorkbookChartAreaFormat extends Entity{
    /** Represents the fill format of an object, which includes background formatting information. Read-only. */
    fill?:WorkbookChartFill | undefined;
    /** Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only. */
    font?:WorkbookChartFont | undefined;
}
