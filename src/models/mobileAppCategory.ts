import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MobileAppCategory extends Entity, Parsable {
    /**
     * The name of the app category.
     */
    displayName?: string | undefined;
    /**
     * The date and time the mobileAppCategory was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
}
