import {Percentile_IncPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPercentile_IncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Percentile_IncPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Percentile_IncPostRequestBody();
}
