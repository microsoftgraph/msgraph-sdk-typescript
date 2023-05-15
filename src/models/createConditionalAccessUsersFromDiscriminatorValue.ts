import {deserializeIntoConditionalAccessUsers} from './deserializeIntoConditionalAccessUsers';
import {ConditionalAccessUsers} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessUsersFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessUsers;
}
