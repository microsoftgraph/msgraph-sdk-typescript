import { deserializeIntoTaskProcessingResult } from './deserializeIntoTaskProcessingResult';
import { type TaskProcessingResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTaskProcessingResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskProcessingResult;
}
