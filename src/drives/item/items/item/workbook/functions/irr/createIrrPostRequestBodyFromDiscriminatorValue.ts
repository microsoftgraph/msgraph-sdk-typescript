import {IrrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIrrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IrrPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IrrPostRequestBody();
}
