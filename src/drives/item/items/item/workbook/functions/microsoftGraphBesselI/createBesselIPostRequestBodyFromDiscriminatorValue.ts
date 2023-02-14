import {BesselIPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBesselIPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BesselIPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BesselIPostRequestBody();
}
