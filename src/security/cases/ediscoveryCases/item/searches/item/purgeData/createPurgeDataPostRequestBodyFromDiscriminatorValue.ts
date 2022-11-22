import {PurgeDataPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPurgeDataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PurgeDataPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PurgeDataPostRequestBody();
}
