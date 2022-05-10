import {ConditionalAccessUsersImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessUsersFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessUsersImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessUsersImpl();
}
