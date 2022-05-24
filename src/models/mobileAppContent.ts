import {Entity} from './entity';
import {MobileAppContentFile} from './mobileAppContentFile';

export interface MobileAppContent extends Entity{
    /** The list of files for this app content version. */
    files?:MobileAppContentFile[] | undefined;
}
