import {Entity} from './entity';
import {ShiftPreferences} from './shiftPreferences';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSettings extends Entity, Parsable {
    /** The contributionToContentDiscoveryAsOrganizationDisabled property */
    contributionToContentDiscoveryAsOrganizationDisabled?: boolean | undefined;
    /** The contributionToContentDiscoveryDisabled property */
    contributionToContentDiscoveryDisabled?: boolean | undefined;
    /** The shiftPreferences property */
    shiftPreferences?: ShiftPreferences | undefined;
}
