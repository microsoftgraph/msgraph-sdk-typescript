import {ApplyDynamicFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyDynamicFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyDynamicFilterPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyDynamicFilterPostRequestBody();
}
