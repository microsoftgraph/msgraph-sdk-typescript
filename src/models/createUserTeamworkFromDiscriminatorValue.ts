import {deserializeIntoUserTeamwork} from './deserializeIntoUserTeamwork';
import {UserTeamwork} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserTeamworkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserTeamwork;
}
