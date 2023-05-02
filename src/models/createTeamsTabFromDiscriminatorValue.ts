import {deserializeIntoTeamsTab} from './deserializeIntoTeamsTab';
import {TeamsTab} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTabFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsTab;
}
