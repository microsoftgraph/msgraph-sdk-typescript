import {ManagedAppAvailability} from './managedAppAvailability';
import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedApp extends MobileApp, Partial<Parsable> {
    /** The Application's availability. Possible values are: global, lineOfBusiness. */
    appAvailability?: ManagedAppAvailability | undefined;
    /** The Application's version. */
    version?: string | undefined;
}
