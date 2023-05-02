import {deserializeIntoTeamwork} from './deserializeIntoTeamwork';
import {Teamwork} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamwork;
}
