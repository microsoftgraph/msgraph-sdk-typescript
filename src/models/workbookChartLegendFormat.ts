import {Entity} from './entity';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartLegendFormat extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the fill format of an object, which includes background formating information. Read-only. */
    fill?: WorkbookChartFill | undefined;
    /** Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only. */
    font?: WorkbookChartFont | undefined;
}
