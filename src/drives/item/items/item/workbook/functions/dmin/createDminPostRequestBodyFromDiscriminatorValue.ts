import {DminPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDminPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DminPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DminPostRequestBody();
}
