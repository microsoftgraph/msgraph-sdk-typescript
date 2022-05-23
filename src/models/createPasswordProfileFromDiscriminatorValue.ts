import {PasswordProfileImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordProfileImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordProfileImpl();
}
