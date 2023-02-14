import {DaysPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDaysPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DaysPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DaysPostRequestBody();
}
