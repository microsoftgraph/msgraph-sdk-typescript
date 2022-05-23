import {Entity} from './entity';
import {VppTokenAccountType} from './vppTokenAccountType';
import {VppTokenState} from './vppTokenState';
import {VppTokenSyncStatus} from './vppTokenSyncStatus';

export interface VppToken extends Entity{
    /** The apple Id associated with the given Apple Volume Purchase Program Token. */
    appleId?:string | undefined;
    /** Whether or not apps for the VPP token will be automatically updated. */
    automaticallyUpdateApps?:boolean | undefined;
    /** Whether or not apps for the VPP token will be automatically updated. */
    countryOrRegion?:string | undefined;
    /** The expiration date time of the Apple Volume Purchase Program Token. */
    expirationDateTime?:Date | undefined;
    /** Last modification date time associated with the Apple Volume Purchase Program Token. */
    lastModifiedDateTime?:Date | undefined;
    /** The last time when an application sync was done with the Apple volume purchase program service using the the Apple Volume Purchase Program Token. */
    lastSyncDateTime?:Date | undefined;
    /** Current sync status of the last application sync which was triggered using the Apple Volume Purchase Program Token. Possible values are: none, inProgress, completed, failed. Possible values are: none, inProgress, completed, failed. */
    lastSyncStatus?:VppTokenSyncStatus | undefined;
    /** The organization associated with the Apple Volume Purchase Program Token */
    organizationName?:string | undefined;
    /** Current state of the Apple Volume Purchase Program Token. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM, duplicateLocationId. */
    state?:VppTokenState | undefined;
    /** The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program. */
    token?:string | undefined;
    /** The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education. */
    vppTokenAccountType?:VppTokenAccountType | undefined;
}
