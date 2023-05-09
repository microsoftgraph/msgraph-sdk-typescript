import {deserializeIntoExtensionProperty} from './deserializeIntoExtensionProperty';
import {ExtensionProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExtensionProperty;
}
