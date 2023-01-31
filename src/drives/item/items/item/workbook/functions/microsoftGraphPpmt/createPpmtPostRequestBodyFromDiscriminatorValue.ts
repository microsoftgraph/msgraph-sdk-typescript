import {PpmtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPpmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PpmtPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PpmtPostRequestBody();
}
