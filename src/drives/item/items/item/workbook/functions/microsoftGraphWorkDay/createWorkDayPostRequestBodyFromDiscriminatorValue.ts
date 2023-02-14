import {WorkDayPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkDayPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkDayPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkDayPostRequestBody();
}
