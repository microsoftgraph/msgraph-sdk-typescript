import {MinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MinPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MinPostRequestBody();
}
