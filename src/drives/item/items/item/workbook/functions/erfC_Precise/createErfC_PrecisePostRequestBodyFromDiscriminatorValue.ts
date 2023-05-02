import {deserializeIntoErfC_PrecisePostRequestBody} from './deserializeIntoErfC_PrecisePostRequestBody';
import {ErfC_PrecisePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createErfC_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoErfC_PrecisePostRequestBody;
}
