import { deserializeIntoResumePostRequestBody } from './deserializeIntoResumePostRequestBody';
import { type ResumePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResumePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResumePostRequestBody;
}
