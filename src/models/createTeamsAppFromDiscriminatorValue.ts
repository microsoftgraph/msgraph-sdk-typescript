import {deserializeIntoTeamsApp} from './deserializeIntoTeamsApp';
import {TeamsApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsApp;
}
