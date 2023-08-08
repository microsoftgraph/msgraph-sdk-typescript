import type {Entity} from './entity';
import type {WorkbookChartLineFormat} from './workbookChartLineFormat';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartGridlinesFormat extends Entity, Parsable {
    /**
     * Represents chart line formatting. Read-only.
     */
    line?: WorkbookChartLineFormat | undefined;
}
