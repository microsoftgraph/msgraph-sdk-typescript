import {deserializeIntoCombinPostRequestBody} from './deserializeIntoCombinPostRequestBody';
import {CombinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCombinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCombinPostRequestBody;
}
