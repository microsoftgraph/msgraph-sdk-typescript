import {ManagedAppAvailability} from './managedAppAvailability';
import {MobileApp} from './mobileApp';

export interface ManagedApp extends MobileApp{
    /** The Application's availability. Possible values are: global, lineOfBusiness. */
    appAvailability?:ManagedAppAvailability | undefined;
    /** The Application's version. */
    version?:string | undefined;
}
