import {Entity} from './entity';
import {Json} from './json';
import {WorkbookChartPointFormat} from './workbookChartPointFormat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartPoint extends Entity, Parsable {
    /**
     * Encapsulates the format properties chart point. Read-only.
     */
    format?: WorkbookChartPointFormat | undefined;
    /**
     * Returns the value of a chart point. Read-only.
     */
    value?: Json | undefined;
}
