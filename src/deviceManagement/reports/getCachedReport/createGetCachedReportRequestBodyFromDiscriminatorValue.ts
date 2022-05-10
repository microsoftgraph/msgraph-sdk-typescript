import {GetCachedReportRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCachedReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCachedReportRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCachedReportRequestBodyImpl();
}
