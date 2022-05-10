import {TeamsTabImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTabFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsTabImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsTabImpl();
}
