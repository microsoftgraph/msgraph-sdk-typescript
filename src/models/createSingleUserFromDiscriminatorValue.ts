import {SingleUserImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSingleUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : SingleUserImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SingleUserImpl();
}
