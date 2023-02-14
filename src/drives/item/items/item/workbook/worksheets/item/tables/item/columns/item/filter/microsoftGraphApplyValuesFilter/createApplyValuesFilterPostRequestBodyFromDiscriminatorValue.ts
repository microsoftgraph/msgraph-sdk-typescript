import {ApplyValuesFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyValuesFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyValuesFilterPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyValuesFilterPostRequestBody();
}
