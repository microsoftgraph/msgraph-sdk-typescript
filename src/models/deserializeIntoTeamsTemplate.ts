import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type TeamsTemplate } from './teamsTemplate';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTemplate(teamsTemplate: TeamsTemplate | undefined = {} as TeamsTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsTemplate),
    }
}
