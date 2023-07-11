import {Entity} from './entity';
import {WorkbookChartAxisTitleFormat} from './workbookChartAxisTitleFormat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisTitle extends Entity, Parsable {
    /**
     * Represents the formatting of chart axis title. Read-only.
     */
    format?: WorkbookChartAxisTitleFormat | undefined;
    /**
     * Represents the axis title.
     */
    text?: string | undefined;
    /**
     * A boolean that specifies the visibility of an axis title.
     */
    visible?: boolean | undefined;
}
