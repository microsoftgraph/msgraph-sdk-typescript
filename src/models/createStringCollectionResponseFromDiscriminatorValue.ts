import {deserializeIntoStringCollectionResponse} from './deserializeIntoStringCollectionResponse';
import {StringCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStringCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStringCollectionResponse;
}
