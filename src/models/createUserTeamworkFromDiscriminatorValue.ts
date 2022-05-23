import {UserTeamworkImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserTeamworkFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserTeamworkImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserTeamworkImpl();
}
