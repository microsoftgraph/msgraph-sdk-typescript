import {deserializeIntoRegistryKeyState} from './deserializeIntoRegistryKeyState';
import {RegistryKeyState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistryKeyStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRegistryKeyState;
}
