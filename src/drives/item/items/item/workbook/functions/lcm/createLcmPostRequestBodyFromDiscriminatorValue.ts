import {LcmPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLcmPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LcmPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LcmPostRequestBody();
}
