import {YearPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createYearPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : YearPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new YearPostRequestBody();
}
