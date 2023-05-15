import {deserializeIntoDetectedAppCollectionResponse} from './deserializeIntoDetectedAppCollectionResponse';
import {DetectedAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDetectedAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDetectedAppCollectionResponse;
}
