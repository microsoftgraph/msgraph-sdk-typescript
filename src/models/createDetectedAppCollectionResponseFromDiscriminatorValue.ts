import {DetectedAppCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDetectedAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DetectedAppCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DetectedAppCollectionResponseImpl();
}
