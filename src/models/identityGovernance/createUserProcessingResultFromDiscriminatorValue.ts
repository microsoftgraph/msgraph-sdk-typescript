import {deserializeIntoUserProcessingResult} from './deserializeIntoUserProcessingResult';
import {UserProcessingResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserProcessingResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserProcessingResult;
}
