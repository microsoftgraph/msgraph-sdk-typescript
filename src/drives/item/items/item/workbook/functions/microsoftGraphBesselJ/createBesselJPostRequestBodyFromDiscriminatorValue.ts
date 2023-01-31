import {BesselJPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBesselJPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BesselJPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BesselJPostRequestBody();
}
