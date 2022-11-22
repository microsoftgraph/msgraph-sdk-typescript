import {ExtensionSchemaPropertyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionSchemaPropertyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExtensionSchemaPropertyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExtensionSchemaPropertyCollectionResponse();
}
