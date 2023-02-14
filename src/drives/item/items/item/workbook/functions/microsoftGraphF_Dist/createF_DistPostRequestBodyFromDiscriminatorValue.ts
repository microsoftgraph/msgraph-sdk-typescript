import {F_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createF_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : F_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new F_DistPostRequestBody();
}
