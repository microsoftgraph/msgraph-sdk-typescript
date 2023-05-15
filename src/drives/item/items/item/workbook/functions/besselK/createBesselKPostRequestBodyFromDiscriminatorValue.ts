import {deserializeIntoBesselKPostRequestBody} from './deserializeIntoBesselKPostRequestBody';
import {BesselKPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBesselKPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBesselKPostRequestBody;
}
