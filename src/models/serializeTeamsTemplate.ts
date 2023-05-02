import {serializeEntity} from './serializeEntity';
import {TeamsTemplate} from './teamsTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsTemplate(writer: SerializationWriter, teamsTemplate: TeamsTemplate | undefined = {} as TeamsTemplate) : void {
        serializeEntity(writer, teamsTemplate)
}
