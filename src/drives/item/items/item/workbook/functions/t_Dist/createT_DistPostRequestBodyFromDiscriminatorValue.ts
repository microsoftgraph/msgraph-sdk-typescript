import {T_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createT_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : T_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new T_DistPostRequestBody();
}
