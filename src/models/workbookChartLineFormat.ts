import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartLineFormat extends Entity, Parsable {
    /**
     * HTML color code representing the color of lines in the chart.
     */
    color?: string | undefined;
}
