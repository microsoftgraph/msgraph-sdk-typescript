import {Bin2HexPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBin2HexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bin2HexPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bin2HexPostRequestBody();
}
