import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeFont extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the bold status of font. */
    bold?: boolean | undefined;
    /** HTML color code representation of the text color. E.g. #FF0000 represents Red. */
    color?: string | undefined;
    /** Represents the italic status of the font. */
    italic?: boolean | undefined;
    /** Font name (e.g. 'Calibri') */
    name?: string | undefined;
    /** Font size. */
    size?: number | undefined;
    /** Type of underline applied to the font. Possible values are: None, Single, Double, SingleAccountant, DoubleAccountant. */
    underline?: string | undefined;
}
