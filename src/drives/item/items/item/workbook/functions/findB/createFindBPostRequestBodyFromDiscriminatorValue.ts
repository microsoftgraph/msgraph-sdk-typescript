import {FindBPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFindBPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FindBPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FindBPostRequestBody();
}
