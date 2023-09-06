import { deserializeIntoExtensionProperty } from './deserializeIntoExtensionProperty';
import { type ExtensionProperty } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExtensionPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExtensionProperty;
}
