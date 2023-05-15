import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TeamsTemplate} from './teamsTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTemplate(teamsTemplate: TeamsTemplate | undefined = {} as TeamsTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsTemplate),
    }
}
