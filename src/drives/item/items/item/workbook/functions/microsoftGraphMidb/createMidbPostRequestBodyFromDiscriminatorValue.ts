import {MidbPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMidbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MidbPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MidbPostRequestBody();
}
