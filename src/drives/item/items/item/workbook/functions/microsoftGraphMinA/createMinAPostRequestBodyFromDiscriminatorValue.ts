import {MinAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMinAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MinAPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MinAPostRequestBody();
}
