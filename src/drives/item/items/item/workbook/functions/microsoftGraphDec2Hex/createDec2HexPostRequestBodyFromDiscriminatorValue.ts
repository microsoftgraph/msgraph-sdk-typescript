import {Dec2HexPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDec2HexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Dec2HexPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Dec2HexPostRequestBody();
}
