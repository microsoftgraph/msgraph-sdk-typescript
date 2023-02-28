import {IspmtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIspmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IspmtPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IspmtPostRequestBody();
}
