import {MobileAppIdentifier} from './mobileAppIdentifier';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosMobileAppIdentifier extends MobileAppIdentifier, Parsable {
    /**
     * The identifier for an app, as specified in the app store.
     */
    bundleId?: string | undefined;
}
