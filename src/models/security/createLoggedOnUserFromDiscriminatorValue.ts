import {deserializeIntoLoggedOnUser} from './deserializeIntoLoggedOnUser';
import {LoggedOnUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLoggedOnUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLoggedOnUser;
}
