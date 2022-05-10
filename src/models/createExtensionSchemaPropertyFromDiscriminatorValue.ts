import {ExtensionSchemaPropertyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionSchemaPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExtensionSchemaPropertyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExtensionSchemaPropertyImpl();
}
