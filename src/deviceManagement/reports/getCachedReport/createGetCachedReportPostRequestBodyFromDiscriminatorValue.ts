import {GetCachedReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCachedReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCachedReportPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCachedReportPostRequestBody();
}
