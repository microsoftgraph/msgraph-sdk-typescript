import {deserializeIntoPmtPostRequestBody} from './deserializeIntoPmtPostRequestBody';
import {PmtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPmtPostRequestBody;
}
