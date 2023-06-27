import {Entity} from './entity';
import {Json} from './json';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeView extends Entity, Parsable {
    /**
     * Represents the cell addresses
     */
    cellAddresses?: Json | undefined;
    /**
     * Returns the number of visible columns. Read-only.
     */
    columnCount?: number | undefined;
    /**
     * Represents the formula in A1-style notation.
     */
    formulas?: Json | undefined;
    /**
     * Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
     */
    formulasLocal?: Json | undefined;
    /**
     * Represents the formula in R1C1-style notation.
     */
    formulasR1C1?: Json | undefined;
    /**
     * Index of the range.
     */
    index?: number | undefined;
    /**
     * Represents Excel's number format code for the given cell. Read-only.
     */
    numberFormat?: Json | undefined;
    /**
     * Returns the number of visible rows. Read-only.
     */
    rowCount?: number | undefined;
    /**
     * Represents a collection of range views associated with the range. Read-only. Read-only.
     */
    rows?: WorkbookRangeView[] | undefined;
    /**
     * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
     */
    text?: Json | undefined;
    /**
     * Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     */
    values?: Json | undefined;
    /**
     * Represents the type of data of each cell. Read-only. The possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error.
     */
    valueTypes?: Json | undefined;
}
