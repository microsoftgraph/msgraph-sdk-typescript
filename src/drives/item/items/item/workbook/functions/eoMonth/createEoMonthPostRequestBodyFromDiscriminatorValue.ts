import {EoMonthPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEoMonthPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : EoMonthPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EoMonthPostRequestBody();
}
