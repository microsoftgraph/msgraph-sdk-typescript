import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartFont extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
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
    /** Size of the font (e.g. 11) */
    size?: number | undefined;
    /** Type of underline applied to the font. The possible values are: None, Single. */
    underline?: string | undefined;
}
