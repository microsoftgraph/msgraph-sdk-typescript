import {deserializeIntoBin2OctPostRequestBody} from './deserializeIntoBin2OctPostRequestBody';
import {Bin2OctPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBin2OctPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBin2OctPostRequestBody;
}
