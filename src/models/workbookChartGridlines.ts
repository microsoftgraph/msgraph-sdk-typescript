import {Entity} from './entity';
import {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartGridlines extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the formatting of chart gridlines. Read-only. */
    format?: WorkbookChartGridlinesFormat | undefined;
    /** Boolean value representing if the axis gridlines are visible or not. */
    visible?: boolean | undefined;
}
