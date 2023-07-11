import {Entity} from './entity';
import {WorkbookChartDataLabelFormat} from './workbookChartDataLabelFormat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartDataLabels extends Entity, Parsable {
    /**
     * Represents the format of chart data labels, which includes fill and font formatting. Read-only.
     */
    format?: WorkbookChartDataLabelFormat | undefined;
    /**
     * DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout.
     */
    position?: string | undefined;
    /**
     * String representing the separator used for the data labels on a chart.
     */
    separator?: string | undefined;
    /**
     * Boolean value representing if the data label bubble size is visible or not.
     */
    showBubbleSize?: boolean | undefined;
    /**
     * Boolean value representing if the data label category name is visible or not.
     */
    showCategoryName?: boolean | undefined;
    /**
     * Boolean value representing if the data label legend key is visible or not.
     */
    showLegendKey?: boolean | undefined;
    /**
     * Boolean value representing if the data label percentage is visible or not.
     */
    showPercentage?: boolean | undefined;
    /**
     * Boolean value representing if the data label series name is visible or not.
     */
    showSeriesName?: boolean | undefined;
    /**
     * Boolean value representing if the data label value is visible or not.
     */
    showValue?: boolean | undefined;
}
