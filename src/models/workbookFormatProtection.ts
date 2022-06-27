import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFormatProtection extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting. */
    formulaHidden?: boolean | undefined;
    /** Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting. */
    locked?: boolean | undefined;
}
