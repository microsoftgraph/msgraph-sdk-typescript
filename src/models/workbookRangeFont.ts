import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeFont extends Entity, Parsable {
    /**
     * Represents the bold status of font.
     */
    bold?: boolean | undefined;
    /**
     * HTML color code representation of the text color. E.g. #FF0000 represents Red.
     */
    color?: string | undefined;
    /**
     * Represents the italic status of the font.
     */
    italic?: boolean | undefined;
    /**
     * Font name (e.g. 'Calibri')
     */
    name?: string | undefined;
    /**
     * Font size.
     */
    size?: number | undefined;
    /**
     * Type of underline applied to the font. The possible values are: None, Single, Double, SingleAccountant, DoubleAccountant.
     */
    underline?: string | undefined;
}
