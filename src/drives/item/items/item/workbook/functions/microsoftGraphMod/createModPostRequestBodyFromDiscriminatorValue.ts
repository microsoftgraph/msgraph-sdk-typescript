import {ModPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createModPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ModPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ModPostRequestBody();
}
