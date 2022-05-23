import {DetectedAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDetectedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : DetectedAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DetectedAppImpl();
}
