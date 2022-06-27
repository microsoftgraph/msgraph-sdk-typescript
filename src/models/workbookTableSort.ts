import {Entity} from './entity';
import {WorkbookSortField} from './workbookSortField';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableSort extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the current conditions used to last sort the table. Read-only. */
    fields?: WorkbookSortField[] | undefined;
    /** Represents whether the casing impacted the last sort of the table. Read-only. */
    matchCase?: boolean | undefined;
    /** Represents Chinese character ordering method last used to sort the table. Possible values are: PinYin, StrokeCount. Read-only. */
    method?: string | undefined;
}
