import {LoggedOnUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLoggedOnUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : LoggedOnUser {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LoggedOnUser();
}
