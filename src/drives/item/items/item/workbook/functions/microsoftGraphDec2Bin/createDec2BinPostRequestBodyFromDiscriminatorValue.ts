import {Dec2BinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDec2BinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Dec2BinPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Dec2BinPostRequestBody();
}
