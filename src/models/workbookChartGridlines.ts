import {Entity} from './entity';
import {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartGridlines extends Entity, Parsable {
    /**
     * Represents the formatting of chart gridlines. Read-only.
     */
    format?: WorkbookChartGridlinesFormat | undefined;
    /**
     * Boolean value representing if the axis gridlines are visible or not.
     */
    visible?: boolean | undefined;
}
