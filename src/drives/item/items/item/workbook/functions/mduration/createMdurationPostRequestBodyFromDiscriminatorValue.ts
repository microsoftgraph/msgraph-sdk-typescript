import {MdurationPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMdurationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MdurationPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MdurationPostRequestBody();
}
