import {TeamsAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppImpl();
}
