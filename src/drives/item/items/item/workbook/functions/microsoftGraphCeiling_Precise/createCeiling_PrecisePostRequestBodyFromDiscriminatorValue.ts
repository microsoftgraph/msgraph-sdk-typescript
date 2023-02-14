import {Ceiling_PrecisePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCeiling_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Ceiling_PrecisePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Ceiling_PrecisePostRequestBody();
}
