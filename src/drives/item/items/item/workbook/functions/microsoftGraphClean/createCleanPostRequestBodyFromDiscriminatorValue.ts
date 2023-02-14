import {CleanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCleanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CleanPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CleanPostRequestBody();
}
