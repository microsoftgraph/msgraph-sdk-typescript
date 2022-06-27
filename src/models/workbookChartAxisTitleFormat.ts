import {Entity} from './entity';
import {WorkbookChartFont} from './workbookChartFont';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisTitleFormat extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only. */
    font?: WorkbookChartFont | undefined;
}
