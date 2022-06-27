import {Entity} from './entity';
import {Json} from './json';
import {WorkbookFilter} from './workbookFilter';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableColumn extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Retrieve the filter applied to the column. Read-only. */
    filter?: WorkbookFilter | undefined;
    /** Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only. */
    index?: number | undefined;
    /** Returns the name of the table column. */
    name?: string | undefined;
    /** Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
    values?: Json | undefined;
}
