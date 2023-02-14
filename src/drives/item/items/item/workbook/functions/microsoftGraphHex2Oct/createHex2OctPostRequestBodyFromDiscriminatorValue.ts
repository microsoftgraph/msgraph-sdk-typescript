import {Hex2OctPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHex2OctPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Hex2OctPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Hex2OctPostRequestBody();
}
