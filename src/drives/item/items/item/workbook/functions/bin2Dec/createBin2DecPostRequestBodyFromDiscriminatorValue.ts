import {Bin2DecPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBin2DecPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bin2DecPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bin2DecPostRequestBody();
}
