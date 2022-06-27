import {Entity} from './entity';
import {WorkbookChartFont} from './workbookChartFont';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisFormat extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only. */
    font?: WorkbookChartFont | undefined;
    /** Represents chart line formatting. Read-only. */
    line?: WorkbookChartLineFormat | undefined;
}
