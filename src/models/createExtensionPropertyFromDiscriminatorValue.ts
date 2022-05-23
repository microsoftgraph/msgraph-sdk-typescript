import {ExtensionPropertyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExtensionPropertyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExtensionPropertyImpl();
}
