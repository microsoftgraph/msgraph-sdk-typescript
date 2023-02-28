import {Oct2BinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOct2BinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Oct2BinPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Oct2BinPostRequestBody();
}
