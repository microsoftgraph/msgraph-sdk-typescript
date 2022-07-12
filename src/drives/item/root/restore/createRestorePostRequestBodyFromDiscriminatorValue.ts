import {RestorePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRestorePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RestorePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RestorePostRequestBody();
}
