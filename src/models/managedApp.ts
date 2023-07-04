import {ManagedAppAvailability} from './managedAppAvailability';
import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedApp extends MobileApp, Parsable {
    /**
     * A managed (MAM) application's availability.
     */
    appAvailability?: ManagedAppAvailability | undefined;
    /**
     * The Application's version.
     */
    version?: string | undefined;
}
