import {BesselKPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBesselKPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BesselKPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BesselKPostRequestBody();
}
