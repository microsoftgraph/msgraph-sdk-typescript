import {deserializeIntoPurgeDataPostRequestBody} from './deserializeIntoPurgeDataPostRequestBody';
import {PurgeDataPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPurgeDataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPurgeDataPostRequestBody;
}
