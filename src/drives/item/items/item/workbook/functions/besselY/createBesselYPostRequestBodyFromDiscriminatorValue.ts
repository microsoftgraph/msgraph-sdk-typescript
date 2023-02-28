import {BesselYPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBesselYPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BesselYPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BesselYPostRequestBody();
}
