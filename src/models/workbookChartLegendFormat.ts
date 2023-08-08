import type {Entity} from './entity';
import type {WorkbookChartFill} from './workbookChartFill';
import type {WorkbookChartFont} from './workbookChartFont';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartLegendFormat extends Entity, Parsable {
    /**
     * Represents the fill format of an object, which includes background formating information. Read-only.
     */
    fill?: WorkbookChartFill | undefined;
    /**
     * Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only.
     */
    font?: WorkbookChartFont | undefined;
}
