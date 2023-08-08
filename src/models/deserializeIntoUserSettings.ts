import {createShiftPreferencesFromDiscriminatorValue} from './createShiftPreferencesFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeShiftPreferences} from './serializeShiftPreferences';
import type {ShiftPreferences} from './shiftPreferences';
import type {UserSettings} from './userSettings';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSettings(userSettings: UserSettings | undefined = {} as UserSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userSettings),
        "contributionToContentDiscoveryAsOrganizationDisabled": n => { userSettings.contributionToContentDiscoveryAsOrganizationDisabled = n.getBooleanValue(); },
        "contributionToContentDiscoveryDisabled": n => { userSettings.contributionToContentDiscoveryDisabled = n.getBooleanValue(); },
        "shiftPreferences": n => { userSettings.shiftPreferences = n.getObjectValue<ShiftPreferences>(createShiftPreferencesFromDiscriminatorValue); },
    }
}
