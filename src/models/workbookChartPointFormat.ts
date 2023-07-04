import {Entity} from './entity';
import {WorkbookChartFill} from './workbookChartFill';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartPointFormat extends Entity, Parsable {
    /**
     * Represents the fill format of a chart, which includes background formating information. Read-only.
     */
    fill?: WorkbookChartFill | undefined;
}
