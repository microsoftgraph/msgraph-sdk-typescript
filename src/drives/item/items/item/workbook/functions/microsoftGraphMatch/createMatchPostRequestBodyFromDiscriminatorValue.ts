import {MatchPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMatchPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MatchPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MatchPostRequestBody();
}
