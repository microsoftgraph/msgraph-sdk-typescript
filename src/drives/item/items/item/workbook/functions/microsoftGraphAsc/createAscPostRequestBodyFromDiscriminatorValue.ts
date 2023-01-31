import {AscPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AscPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AscPostRequestBody();
}
