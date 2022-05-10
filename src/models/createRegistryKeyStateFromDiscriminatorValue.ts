import {RegistryKeyStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistryKeyStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : RegistryKeyStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RegistryKeyStateImpl();
}
