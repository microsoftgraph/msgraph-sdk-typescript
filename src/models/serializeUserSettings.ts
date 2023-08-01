import {serializeEntity} from './serializeEntity';
import {serializeShiftPreferences} from './serializeShiftPreferences';
import type {ShiftPreferences} from './shiftPreferences';
import type {UserSettings} from './userSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSettings(writer: SerializationWriter, userSettings: UserSettings | undefined = {} as UserSettings) : void {
        serializeEntity(writer, userSettings)
        writer.writeBooleanValue("contributionToContentDiscoveryAsOrganizationDisabled", userSettings.contributionToContentDiscoveryAsOrganizationDisabled);
        writer.writeBooleanValue("contributionToContentDiscoveryDisabled", userSettings.contributionToContentDiscoveryDisabled);
        writer.writeObjectValue<ShiftPreferences>("shiftPreferences", userSettings.shiftPreferences, serializeShiftPreferences);
}
