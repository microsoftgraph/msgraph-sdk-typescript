import {AcotPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcotPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AcotPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AcotPostRequestBody();
}
