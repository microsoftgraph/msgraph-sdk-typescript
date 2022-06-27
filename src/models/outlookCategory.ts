import {CategoryColor} from './categoryColor';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookCategory extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A pre-set color constant that characterizes a category, and that is mapped to one of 25 predefined colors. See the note below. */
    color?: CategoryColor | undefined;
    /** A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be changed. Read-only. */
    displayName?: string | undefined;
}
