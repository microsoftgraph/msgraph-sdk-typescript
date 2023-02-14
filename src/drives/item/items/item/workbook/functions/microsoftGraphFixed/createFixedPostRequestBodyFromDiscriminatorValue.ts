import {FixedPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFixedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FixedPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FixedPostRequestBody();
}
