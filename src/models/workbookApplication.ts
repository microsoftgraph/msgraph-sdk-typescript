import {Entity} from './entity';

export interface WorkbookApplication extends Entity{
    /** Returns the calculation mode used in the workbook. Possible values are: Automatic, AutomaticExceptTables, Manual. */
    calculationMode?:string | undefined;
}
