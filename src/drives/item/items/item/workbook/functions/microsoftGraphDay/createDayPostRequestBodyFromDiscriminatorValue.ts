import {DayPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDayPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DayPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DayPostRequestBody();
}
