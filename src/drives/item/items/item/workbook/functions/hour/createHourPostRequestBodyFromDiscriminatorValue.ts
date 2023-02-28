import {HourPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHourPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : HourPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HourPostRequestBody();
}
