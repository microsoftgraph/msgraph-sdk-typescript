import type {Entity} from './entity';
import type {MobileAppIdentifier} from './mobileAppIdentifier';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileApp extends Entity, Parsable {
    /**
     * The identifier for an app with it's operating system type.
     */
    mobileAppIdentifier?: MobileAppIdentifier | undefined;
    /**
     * Version of the entity.
     */
    version?: string | undefined;
}
