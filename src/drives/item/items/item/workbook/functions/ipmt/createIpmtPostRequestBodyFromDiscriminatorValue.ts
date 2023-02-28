import {IpmtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IpmtPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IpmtPostRequestBody();
}
