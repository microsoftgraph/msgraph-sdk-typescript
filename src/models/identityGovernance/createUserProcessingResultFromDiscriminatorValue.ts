import { deserializeIntoUserProcessingResult } from './deserializeIntoUserProcessingResult';
import { type UserProcessingResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserProcessingResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserProcessingResult;
}
