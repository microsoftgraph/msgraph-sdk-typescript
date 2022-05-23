import {Entity} from './entity';
import {Json} from './json';
import {WorkbookChartPointFormat} from './workbookChartPointFormat';

export interface WorkbookChartPoint extends Entity{
    /** Encapsulates the format properties chart point. Read-only. */
    format?:WorkbookChartPointFormat | undefined;
    /** Returns the value of a chart point. Read-only. */
    value?:Json | undefined;
}
