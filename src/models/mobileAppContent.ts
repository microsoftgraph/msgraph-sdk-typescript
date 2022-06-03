import {Entity} from './entity';
import {MobileAppContentFile} from './mobileAppContentFile';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppContent extends Entity, Partial<Parsable> {
    /** The list of files for this app content version. */
    files?: MobileAppContentFile[] | undefined;
}
