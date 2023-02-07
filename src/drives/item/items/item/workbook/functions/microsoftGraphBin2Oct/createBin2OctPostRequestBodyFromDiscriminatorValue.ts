import {Bin2OctPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBin2OctPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bin2OctPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bin2OctPostRequestBody();
}
