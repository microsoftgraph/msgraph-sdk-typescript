import {MobileAppIdentifier} from './mobileAppIdentifier';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidMobileAppIdentifier extends MobileAppIdentifier, Parsable {
    /**
     * The identifier for an app, as specified in the play store.
     */
    packageId?: string | undefined;
}
