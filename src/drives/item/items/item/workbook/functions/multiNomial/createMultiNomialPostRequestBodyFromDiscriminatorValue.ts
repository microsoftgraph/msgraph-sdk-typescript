import {deserializeIntoMultiNomialPostRequestBody} from './deserializeIntoMultiNomialPostRequestBody';
import {MultiNomialPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMultiNomialPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMultiNomialPostRequestBody;
}
