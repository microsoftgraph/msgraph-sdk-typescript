import {YearFracPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createYearFracPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : YearFracPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new YearFracPostRequestBody();
}
