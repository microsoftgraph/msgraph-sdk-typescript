import {Entity} from './entity';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFilter extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The currently applied filter on the given column. Read-only. */
    criteria?: WorkbookFilterCriteria | undefined;
}
