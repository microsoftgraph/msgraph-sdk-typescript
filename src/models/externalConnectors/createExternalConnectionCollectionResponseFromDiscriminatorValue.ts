import {deserializeIntoExternalConnectionCollectionResponse} from './deserializeIntoExternalConnectionCollectionResponse';
import {ExternalConnectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalConnectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalConnectionCollectionResponse;
}
