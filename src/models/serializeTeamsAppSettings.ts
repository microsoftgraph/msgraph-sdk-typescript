import {serializeEntity} from './serializeEntity';
import type {TeamsAppSettings} from './teamsAppSettings';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppSettings(writer: SerializationWriter, teamsAppSettings: TeamsAppSettings | undefined = {} as TeamsAppSettings) : void {
        serializeEntity(writer, teamsAppSettings)
        writer.writeBooleanValue("allowUserRequestsForAppAccess", teamsAppSettings.allowUserRequestsForAppAccess);
}
