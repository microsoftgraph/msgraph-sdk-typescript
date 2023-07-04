import {deserializeIntoTaskProcessingResult} from './deserializeIntoTaskProcessingResult';
import {TaskProcessingResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskProcessingResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskProcessingResult;
}
