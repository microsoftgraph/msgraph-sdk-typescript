import {CategoryColor} from './categoryColor';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookCategory extends Entity, Parsable {
    /**
     * A pre-set color constant that characterizes a category, and that is mapped to one of 25 predefined colors. For more details, see the following note.
     */
    color?: CategoryColor | undefined;
    /**
     * A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be changed. Read-only.
     */
    displayName?: string | undefined;
}
