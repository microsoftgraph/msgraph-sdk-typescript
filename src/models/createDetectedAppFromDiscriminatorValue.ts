import {deserializeIntoDetectedApp} from './deserializeIntoDetectedApp';
import {DetectedApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDetectedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDetectedApp;
}
