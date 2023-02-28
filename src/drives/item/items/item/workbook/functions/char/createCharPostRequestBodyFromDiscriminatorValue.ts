import {CharPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCharPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CharPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CharPostRequestBody();
}
