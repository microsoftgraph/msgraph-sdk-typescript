import { deserializeIntoRegistryKeyState } from './deserializeIntoRegistryKeyState';
import { type RegistryKeyState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRegistryKeyStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRegistryKeyState;
}
