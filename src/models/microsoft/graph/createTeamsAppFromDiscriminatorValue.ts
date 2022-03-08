import {TeamsApp} from './teamsApp';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsApp();
}
