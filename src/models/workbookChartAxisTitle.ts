import {Entity} from './entity';
import {WorkbookChartAxisTitleFormat} from './workbookChartAxisTitleFormat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisTitle extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the formatting of chart axis title. Read-only. */
    format?: WorkbookChartAxisTitleFormat | undefined;
    /** Represents the axis title. */
    text?: string | undefined;
    /** A boolean that specifies the visibility of an axis title. */
    visible?: boolean | undefined;
}
