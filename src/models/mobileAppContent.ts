import {Entity} from './entity';
import {MobileAppContentFile} from './mobileAppContentFile';
import {MobileContainedApp} from './mobileContainedApp';
import {Parsable} from '@microsoft/kiota-abstractions';

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
