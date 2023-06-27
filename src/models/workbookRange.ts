import {Entity} from './entity';
import {Json} from './json';
import {WorkbookRangeFormat} from './workbookRangeFormat';
import {WorkbookRangeSort} from './workbookRangeSort';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRange extends Entity, Parsable {
    /**
     * Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.
     */
    address?: string | undefined;
    /**
     * Represents range reference for the specified range in the language of the user. Read-only.
     */
    addressLocal?: string | undefined;
    /**
     * Number of cells in the range. Read-only.
     */
    cellCount?: number | undefined;
    /**
     * Represents the total number of columns in the range. Read-only.
     */
    columnCount?: number | undefined;
    /**
     * Represents if all columns of the current range are hidden.
     */
    columnHidden?: boolean | undefined;
    /**
     * Represents the column number of the first cell in the range. Zero-indexed. Read-only.
     */
    columnIndex?: number | undefined;
    /**
     * Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
     */
    format?: WorkbookRangeFormat | undefined;
    /**
     * Represents the formula in A1-style notation.
     */
    formulas?: Json | undefined;
    /**
     * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
     */
    formulasLocal?: Json | undefined;
    /**
     * Represents the formula in R1C1-style notation.
     */
    formulasR1C1?: Json | undefined;
    /**
     * Represents if all cells of the current range are hidden. Read-only.
     */
    hidden?: boolean | undefined;
    /**
     * Represents Excel's number format code for the given cell.
     */
    numberFormat?: Json | undefined;
    /**
     * Returns the total number of rows in the range. Read-only.
     */
    rowCount?: number | undefined;
    /**
     * Represents if all rows of the current range are hidden.
     */
    rowHidden?: boolean | undefined;
    /**
     * Returns the row number of the first cell in the range. Zero-indexed. Read-only.
     */
    rowIndex?: number | undefined;
    /**
     * The worksheet containing the current range. Read-only.
     */
    sort?: WorkbookRangeSort | undefined;
    /**
     * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
     */
    text?: Json | undefined;
    /**
     * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     */
    values?: Json | undefined;
    /**
     * Represents the type of data of each cell. The possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. Read-only.
     */
    valueTypes?: Json | undefined;
    /**
     * The worksheet containing the current range. Read-only.
     */
    worksheet?: WorkbookWorksheet | undefined;
}
