import {serializeEntity} from './serializeEntity';
import {serializeShiftPreferences} from './serializeShiftPreferences';
import {ShiftPreferences} from './shiftPreferences';
import {UserSettings} from './userSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSettings(writer: SerializationWriter, userSettings: UserSettings | undefined = {} as UserSettings) : void {
        serializeEntity(writer, userSettings)
        writer.writeBooleanValue("contributionToContentDiscoveryAsOrganizationDisabled", userSettings.contributionToContentDiscoveryAsOrganizationDisabled);
        writer.writeBooleanValue("contributionToContentDiscoveryDisabled", userSettings.contributionToContentDiscoveryDisabled);
        writer.writeObjectValue<ShiftPreferences>("shiftPreferences", userSettings.shiftPreferences, serializeShiftPreferences);
}
