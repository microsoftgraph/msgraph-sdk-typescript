import {deserializeIntoExternalGroupCollectionResponse} from './deserializeIntoExternalGroupCollectionResponse';
import {ExternalGroupCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalGroupCollectionResponse;
}
