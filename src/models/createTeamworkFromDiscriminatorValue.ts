import {TeamworkImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkImpl();
}
