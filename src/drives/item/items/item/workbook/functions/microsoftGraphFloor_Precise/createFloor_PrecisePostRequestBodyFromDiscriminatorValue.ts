import {Floor_PrecisePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFloor_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Floor_PrecisePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Floor_PrecisePostRequestBody();
}
