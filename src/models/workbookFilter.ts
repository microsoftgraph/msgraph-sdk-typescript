import {Entity} from './entity';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFilter extends Entity, Parsable {
    /**
     * The currently applied filter on the given column. Read-only.
     */
    criteria?: WorkbookFilterCriteria | undefined;
}
