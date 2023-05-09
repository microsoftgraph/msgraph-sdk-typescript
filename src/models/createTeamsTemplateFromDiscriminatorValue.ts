import {deserializeIntoTeamsTemplate} from './deserializeIntoTeamsTemplate';
import {TeamsTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsTemplate;
}
