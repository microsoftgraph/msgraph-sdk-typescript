import {Oct2HexPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOct2HexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Oct2HexPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Oct2HexPostRequestBody();
}
