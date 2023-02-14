import {XnpvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createXnpvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : XnpvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new XnpvPostRequestBody();
}
