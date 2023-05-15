import {deserializeIntoCreateSessionPostRequestBody} from './deserializeIntoCreateSessionPostRequestBody';
import {CreateSessionPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateSessionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateSessionPostRequestBody;
}
