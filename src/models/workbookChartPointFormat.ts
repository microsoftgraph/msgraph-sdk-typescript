import { type Entity } from './entity';
import { type WorkbookChartFill } from './workbookChartFill';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkbookChartPointFormat extends Entity, Parsable {
    /**
     * Represents the fill format of a chart, which includes background formating information. Read-only.
     */
    fill?: WorkbookChartFill | undefined;
}
