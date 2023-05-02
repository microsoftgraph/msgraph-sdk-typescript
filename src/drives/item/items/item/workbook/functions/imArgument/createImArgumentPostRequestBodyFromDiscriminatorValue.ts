import {deserializeIntoImArgumentPostRequestBody} from './deserializeIntoImArgumentPostRequestBody';
import {ImArgumentPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImArgumentPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImArgumentPostRequestBody;
}
