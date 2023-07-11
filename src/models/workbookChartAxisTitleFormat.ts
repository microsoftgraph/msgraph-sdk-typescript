import {Entity} from './entity';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisTitleFormat extends Entity, Parsable {
    /**
     * Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.
     */
    font?: WorkbookChartFont | undefined;
}
