import {deserializeIntoDec2OctPostRequestBody} from './deserializeIntoDec2OctPostRequestBody';
import {Dec2OctPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDec2OctPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDec2OctPostRequestBody;
}
