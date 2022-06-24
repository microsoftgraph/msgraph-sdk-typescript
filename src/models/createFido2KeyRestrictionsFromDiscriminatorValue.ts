import {Fido2KeyRestrictionsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFido2KeyRestrictionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fido2KeyRestrictionsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fido2KeyRestrictionsImpl();
}
