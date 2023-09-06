import { serializeEntity } from './serializeEntity';
import { type TeamsTemplate } from './teamsTemplate';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamsTemplate(writer: SerializationWriter, teamsTemplate: TeamsTemplate | undefined = {} as TeamsTemplate) : void {
        serializeEntity(writer, teamsTemplate)
}
