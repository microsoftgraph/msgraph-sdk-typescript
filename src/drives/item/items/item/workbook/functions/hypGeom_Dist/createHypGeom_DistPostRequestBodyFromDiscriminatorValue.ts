import {HypGeom_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHypGeom_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : HypGeom_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HypGeom_DistPostRequestBody();
}
