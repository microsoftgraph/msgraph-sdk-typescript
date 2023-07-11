import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFormatProtection extends Entity, Parsable {
    /**
     * Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting.
     */
    formulaHidden?: boolean | undefined;
    /**
     * Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting.
     */
    locked?: boolean | undefined;
}
