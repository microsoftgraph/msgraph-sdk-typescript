import {ApplyCellColorFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyCellColorFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyCellColorFilterPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyCellColorFilterPostRequestBody();
}
