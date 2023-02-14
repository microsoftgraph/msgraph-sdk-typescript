import {StDevAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStDevAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StDevAPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StDevAPostRequestBody();
}
