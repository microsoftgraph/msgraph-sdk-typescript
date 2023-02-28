import {CoshPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCoshPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CoshPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CoshPostRequestBody();
}
