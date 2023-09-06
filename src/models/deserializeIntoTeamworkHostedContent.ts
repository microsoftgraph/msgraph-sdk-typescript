import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type TeamworkHostedContent } from './teamworkHostedContent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkHostedContent(teamworkHostedContent: TeamworkHostedContent | undefined = {} as TeamworkHostedContent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamworkHostedContent),
        "contentBytes": n => { teamworkHostedContent.contentBytes = n.getStringValue(); },
        "contentType": n => { teamworkHostedContent.contentType = n.getStringValue(); },
    }
}
