import {deserializeIntoAppLogCollectionRequest} from './deserializeIntoAppLogCollectionRequest';
import {AppLogCollectionRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppLogCollectionRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppLogCollectionRequest;
}
