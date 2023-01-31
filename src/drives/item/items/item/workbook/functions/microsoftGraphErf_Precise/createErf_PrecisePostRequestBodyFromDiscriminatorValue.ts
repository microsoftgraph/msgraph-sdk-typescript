import {Erf_PrecisePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createErf_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Erf_PrecisePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Erf_PrecisePostRequestBody();
}
