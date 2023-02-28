import {CombinaPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCombinaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CombinaPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CombinaPostRequestBody();
}
