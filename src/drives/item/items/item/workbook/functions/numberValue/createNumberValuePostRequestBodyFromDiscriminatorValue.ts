import {deserializeIntoNumberValuePostRequestBody} from './deserializeIntoNumberValuePostRequestBody';
import {NumberValuePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNumberValuePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNumberValuePostRequestBody;
}
