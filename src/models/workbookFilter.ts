import {Entity} from './entity';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';

export interface WorkbookFilter extends Entity{
    /** The currently applied filter on the given column. Read-only. */
    criteria?:WorkbookFilterCriteria | undefined;
}
