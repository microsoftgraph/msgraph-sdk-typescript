import {AccessAction} from './accessAction';
import {DriveItem} from './driveItem';
import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivity extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** An item was accessed. */
    access?: AccessAction | undefined;
    /** Details about when the activity took place. Read-only. */
    activityDateTime?: Date | undefined;
    /** Identity of who performed the action. Read-only. */
    actor?: IdentitySet | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Exposes the driveItem that was the target of this activity. */
    driveItem?: DriveItem | undefined;
}
