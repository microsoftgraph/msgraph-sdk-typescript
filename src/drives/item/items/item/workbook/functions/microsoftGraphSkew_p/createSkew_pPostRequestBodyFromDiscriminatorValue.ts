import {Skew_pPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkew_pPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Skew_pPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Skew_pPostRequestBody();
}
