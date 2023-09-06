import { deserializeIntoTeamsTemplate } from './deserializeIntoTeamsTemplate';
import { type TeamsTemplate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsTemplate;
}
