import {deserializeIntoFactDoublePostRequestBody} from './deserializeIntoFactDoublePostRequestBody';
import {FactDoublePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFactDoublePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFactDoublePostRequestBody;
}
