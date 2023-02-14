import {ApplyIconFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyIconFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyIconFilterPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyIconFilterPostRequestBody();
}
