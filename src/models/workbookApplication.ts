import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkbookApplication extends Entity, Parsable {
    /**
     * Returns the calculation mode used in the workbook. Possible values are: Automatic, AutomaticExceptTables, Manual.
     */
    calculationMode?: string | undefined;
}
