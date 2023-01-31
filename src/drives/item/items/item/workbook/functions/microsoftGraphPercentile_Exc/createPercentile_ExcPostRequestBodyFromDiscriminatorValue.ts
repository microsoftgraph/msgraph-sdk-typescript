import {Percentile_ExcPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPercentile_ExcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Percentile_ExcPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Percentile_ExcPostRequestBody();
}
