import {deserializeIntoPpmtPostRequestBody} from './deserializeIntoPpmtPostRequestBody';
import {PpmtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPpmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPpmtPostRequestBody;
}
