import {Expon_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExpon_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Expon_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Expon_DistPostRequestBody();
}
