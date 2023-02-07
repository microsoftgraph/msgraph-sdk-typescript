import {FvschedulePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFvschedulePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FvschedulePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FvschedulePostRequestBody();
}
