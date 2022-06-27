import {ManagedAppAvailability} from './managedAppAvailability';
import {MobileApp} from './mobileApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedApp extends Partial<AdditionalDataHolder>, MobileApp, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The Application's availability. Possible values are: global, lineOfBusiness. */
    appAvailability?: ManagedAppAvailability | undefined;
    /** The Application's version. */
    version?: string | undefined;
}
