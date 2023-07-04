import {Entity} from './entity';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartDataLabelFormat extends Entity, Parsable {
    /**
     * Represents the fill format of the current chart data label. Read-only.
     */
    fill?: WorkbookChartFill | undefined;
    /**
     * Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only.
     */
    font?: WorkbookChartFont | undefined;
}
