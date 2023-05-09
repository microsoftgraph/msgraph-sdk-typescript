import {deserializeIntoBin2HexPostRequestBody} from './deserializeIntoBin2HexPostRequestBody';
import {Bin2HexPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBin2HexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBin2HexPostRequestBody;
}
