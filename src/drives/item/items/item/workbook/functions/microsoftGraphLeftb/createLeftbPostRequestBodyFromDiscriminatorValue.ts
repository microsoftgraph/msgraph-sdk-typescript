import {LeftbPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLeftbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LeftbPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LeftbPostRequestBody();
}
