import { deserializeIntoUserTeamwork } from './deserializeIntoUserTeamwork';
import { type UserTeamwork } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserTeamworkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserTeamwork;
}
