import {Entity} from './entity';
import {VppTokenAccountType} from './vppTokenAccountType';
import {VppTokenState} from './vppTokenState';
import {VppTokenSyncStatus} from './vppTokenSyncStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface VppToken extends Entity, Parsable {
    /**
     * The apple Id associated with the given Apple Volume Purchase Program Token.
     */
    appleId?: string | undefined;
    /**
     * Whether or not apps for the VPP token will be automatically updated.
     */
    automaticallyUpdateApps?: boolean | undefined;
    /**
     * Whether or not apps for the VPP token will be automatically updated.
     */
    countryOrRegion?: string | undefined;
    /**
     * The expiration date time of the Apple Volume Purchase Program Token.
     */
    expirationDateTime?: Date | undefined;
    /**
     * Last modification date time associated with the Apple Volume Purchase Program Token.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The last time when an application sync was done with the Apple volume purchase program service using the the Apple Volume Purchase Program Token.
     */
    lastSyncDateTime?: Date | undefined;
    /**
     * Possible sync statuses associated with an Apple Volume Purchase Program token.
     */
    lastSyncStatus?: VppTokenSyncStatus | undefined;
    /**
     * The organization associated with the Apple Volume Purchase Program Token
     */
    organizationName?: string | undefined;
    /**
     * Possible states associated with an Apple Volume Purchase Program token.
     */
    state?: VppTokenState | undefined;
    /**
     * The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program.
     */
    token?: string | undefined;
    /**
     * Possible types of an Apple Volume Purchase Program token.
     */
    vppTokenAccountType?: VppTokenAccountType | undefined;
}
