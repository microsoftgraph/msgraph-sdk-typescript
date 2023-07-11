import {Entity} from './entity';
import {Json} from './json';
import {WorkbookChartAxisFormat} from './workbookChartAxisFormat';
import {WorkbookChartAxisTitle} from './workbookChartAxisTitle';
import {WorkbookChartGridlines} from './workbookChartGridlines';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxis extends Entity, Parsable {
    /**
     * Represents the formatting of a chart object, which includes line and font formatting. Read-only.
     */
    format?: WorkbookChartAxisFormat | undefined;
    /**
     * Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
     */
    majorGridlines?: WorkbookChartGridlines | undefined;
    /**
     * Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
     */
    majorUnit?: Json | undefined;
    /**
     * Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
     */
    maximum?: Json | undefined;
    /**
     * Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
     */
    minimum?: Json | undefined;
    /**
     * Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
     */
    minorGridlines?: WorkbookChartGridlines | undefined;
    /**
     * Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
     */
    minorUnit?: Json | undefined;
    /**
     * Represents the axis title. Read-only.
     */
    title?: WorkbookChartAxisTitle | undefined;
}
