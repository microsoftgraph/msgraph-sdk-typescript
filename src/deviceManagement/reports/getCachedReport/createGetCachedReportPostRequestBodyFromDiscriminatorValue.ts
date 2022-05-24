import {GetCachedReportPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCachedReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCachedReportPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCachedReportPostRequestBodyImpl();
}
