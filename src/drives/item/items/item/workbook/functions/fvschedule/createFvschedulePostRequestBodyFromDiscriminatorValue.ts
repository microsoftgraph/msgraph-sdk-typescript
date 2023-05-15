import {deserializeIntoFvschedulePostRequestBody} from './deserializeIntoFvschedulePostRequestBody';
import {FvschedulePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFvschedulePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFvschedulePostRequestBody;
}
