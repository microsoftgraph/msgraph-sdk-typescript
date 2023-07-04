import {Entity} from '../entity';
import {Set} from './set';
import {TermGroupScope} from './termGroupScope';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Group extends Entity, Parsable {
    /**
     * Date and time of the group creation. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * Description that gives details on the term usage.
     */
    description?: string | undefined;
    /**
     * Name of the group.
     */
    displayName?: string | undefined;
    /**
     * ID of the parent site of this group.
     */
    parentSiteId?: string | undefined;
    /**
     * Returns the type of the group. Possible values are: global, system, and siteCollection.
     */
    scope?: TermGroupScope | undefined;
    /**
     * All sets under the group in a term [store].
     */
    sets?: Set[] | undefined;
}
