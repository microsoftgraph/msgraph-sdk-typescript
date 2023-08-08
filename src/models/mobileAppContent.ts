import type {Entity} from './entity';
import type {MobileAppContentFile} from './mobileAppContentFile';
import type {MobileContainedApp} from './mobileContainedApp';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppContent extends Entity, Parsable {
    /**
     * The collection of contained apps in a MobileLobApp acting as a package.
     */
    containedApps?: MobileContainedApp[] | undefined;
    /**
     * The list of files for this app content version.
     */
    files?: MobileAppContentFile[] | undefined;
}
