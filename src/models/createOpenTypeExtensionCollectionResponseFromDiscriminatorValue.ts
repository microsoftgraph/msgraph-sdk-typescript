import {OpenTypeExtensionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenTypeExtensionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenTypeExtensionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenTypeExtensionCollectionResponse();
}
