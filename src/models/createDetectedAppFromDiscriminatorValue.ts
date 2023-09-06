import { deserializeIntoDetectedApp } from './deserializeIntoDetectedApp';
import { type DetectedApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDetectedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDetectedApp;
}
