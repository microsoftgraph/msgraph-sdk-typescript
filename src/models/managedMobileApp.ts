import {Entity} from './entity';
import {MobileAppIdentifier} from './mobileAppIdentifier';

export interface ManagedMobileApp extends Entity{
    /** The identifier for an app with it's operating system type. */
    mobileAppIdentifier?:MobileAppIdentifier | undefined;
    /** Version of the entity. */
    version?:string | undefined;
}
