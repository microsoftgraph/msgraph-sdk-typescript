import {DetectedApp} from './detectedApp';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDetectedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : DetectedApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DetectedApp();
}
