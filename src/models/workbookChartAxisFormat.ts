import type {Entity} from './entity';
import type {WorkbookChartFont} from './workbookChartFont';
import type {WorkbookChartLineFormat} from './workbookChartLineFormat';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisFormat extends Entity, Parsable {
    /**
     * Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only.
     */
    font?: WorkbookChartFont | undefined;
    /**
     * Represents chart line formatting. Read-only.
     */
    line?: WorkbookChartLineFormat | undefined;
}
