import {deserializeIntoCreateNewVersionPostRequestBody} from './deserializeIntoCreateNewVersionPostRequestBody';
import {CreateNewVersionPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateNewVersionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateNewVersionPostRequestBody;
}
