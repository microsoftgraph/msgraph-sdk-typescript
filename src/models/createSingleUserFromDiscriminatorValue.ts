import {deserializeIntoSingleUser} from './deserializeIntoSingleUser';
import {SingleUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSingleUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSingleUser;
}
