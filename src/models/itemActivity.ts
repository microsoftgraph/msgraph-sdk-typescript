import { type AccessAction } from './accessAction';
import { type DriveItem } from './driveItem';
import { type Entity } from './entity';
import { type IdentitySet } from './identitySet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ItemActivity extends Entity, Parsable {
    /**
     * An item was accessed.
     */
    access?: AccessAction | undefined;
    /**
     * Details about when the activity took place. Read-only.
     */
    activityDateTime?: Date | undefined;
    /**
     * Identity of who performed the action. Read-only.
     */
    actor?: IdentitySet | undefined;
    /**
     * Exposes the driveItem that was the target of this activity.
     */
    driveItem?: DriveItem | undefined;
}
