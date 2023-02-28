import {RoundUpPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoundUpPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoundUpPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoundUpPostRequestBody();
}
