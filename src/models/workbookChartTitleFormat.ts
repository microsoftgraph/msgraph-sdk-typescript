import {Entity} from './entity';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartTitleFormat extends Entity, Parsable {
    /**
     * Represents the fill format of an object, which includes background formatting information. Read-only.
     */
    fill?: WorkbookChartFill | undefined;
    /**
     * Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.
     */
    font?: WorkbookChartFont | undefined;
}
