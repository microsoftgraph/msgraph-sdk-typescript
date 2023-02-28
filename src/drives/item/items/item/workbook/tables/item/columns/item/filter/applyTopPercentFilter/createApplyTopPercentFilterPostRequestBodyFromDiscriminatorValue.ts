import {ApplyTopPercentFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyTopPercentFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyTopPercentFilterPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyTopPercentFilterPostRequestBody();
}
