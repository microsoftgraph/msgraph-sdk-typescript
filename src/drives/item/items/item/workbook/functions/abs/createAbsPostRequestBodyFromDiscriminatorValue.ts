import {AbsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAbsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AbsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AbsPostRequestBody();
}
