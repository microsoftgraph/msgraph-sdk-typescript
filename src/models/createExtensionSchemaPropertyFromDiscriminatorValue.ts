import {deserializeIntoExtensionSchemaProperty} from './deserializeIntoExtensionSchemaProperty';
import {ExtensionSchemaProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionSchemaPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExtensionSchemaProperty;
}
