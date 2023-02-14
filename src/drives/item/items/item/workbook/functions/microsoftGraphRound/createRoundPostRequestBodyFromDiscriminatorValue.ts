import {RoundPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoundPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoundPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoundPostRequestBody();
}
