import {deserializeIntoAppLogCollectionRequestCollectionResponse} from './deserializeIntoAppLogCollectionRequestCollectionResponse';
import {AppLogCollectionRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppLogCollectionRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppLogCollectionRequestCollectionResponse;
}
