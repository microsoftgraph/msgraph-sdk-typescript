import {ErfC_PrecisePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createErfC_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ErfC_PrecisePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ErfC_PrecisePostRequestBody();
}
