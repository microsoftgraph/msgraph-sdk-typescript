import {Entity} from './entity';
import {WorkbookFormatProtection} from './workbookFormatProtection';
import {WorkbookRangeBorder} from './workbookRangeBorder';
import {WorkbookRangeFill} from './workbookRangeFill';
import {WorkbookRangeFont} from './workbookRangeFont';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeFormat extends Entity, Parsable {
    /**
     * Collection of border objects that apply to the overall range selected Read-only.
     */
    borders?: WorkbookRangeBorder[] | undefined;
    /**
     * Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned.
     */
    columnWidth?: number | undefined;
    /**
     * Returns the fill object defined on the overall range. Read-only.
     */
    fill?: WorkbookRangeFill | undefined;
    /**
     * Returns the font object defined on the overall range selected Read-only.
     */
    font?: WorkbookRangeFont | undefined;
    /**
     * Represents the horizontal alignment for the specified object. The possible values are: General, Left, Center, Right, Fill, Justify, CenterAcrossSelection, Distributed.
     */
    horizontalAlignment?: string | undefined;
    /**
     * Returns the format protection object for a range. Read-only.
     */
    protection?: WorkbookFormatProtection | undefined;
    /**
     * Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned.
     */
    rowHeight?: number | undefined;
    /**
     * Represents the vertical alignment for the specified object. The possible values are: Top, Center, Bottom, Justify, Distributed.
     */
    verticalAlignment?: string | undefined;
    /**
     * Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting
     */
    wrapText?: boolean | undefined;
}
