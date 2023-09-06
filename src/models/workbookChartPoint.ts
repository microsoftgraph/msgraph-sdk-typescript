import { type Entity } from './entity';
import { type Json } from './json';
import { type WorkbookChartPointFormat } from './workbookChartPointFormat';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
