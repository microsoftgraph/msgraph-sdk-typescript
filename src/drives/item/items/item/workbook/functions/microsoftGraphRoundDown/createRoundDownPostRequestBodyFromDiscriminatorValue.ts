import {RoundDownPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoundDownPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoundDownPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoundDownPostRequestBody();
}
