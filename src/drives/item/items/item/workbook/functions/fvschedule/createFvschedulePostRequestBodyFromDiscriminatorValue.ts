import { deserializeIntoFvschedulePostRequestBody } from './deserializeIntoFvschedulePostRequestBody';
import { type FvschedulePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFvschedulePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFvschedulePostRequestBody;
}
