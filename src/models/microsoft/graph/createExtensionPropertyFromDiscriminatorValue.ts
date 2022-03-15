import {ExtensionProperty} from './extensionProperty';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExtensionProperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExtensionProperty();
}
