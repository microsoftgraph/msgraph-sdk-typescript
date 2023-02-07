import {MonthPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMonthPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MonthPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MonthPostRequestBody();
}
