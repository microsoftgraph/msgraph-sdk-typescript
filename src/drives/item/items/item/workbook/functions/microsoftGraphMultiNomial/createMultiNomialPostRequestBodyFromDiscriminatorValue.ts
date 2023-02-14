import {MultiNomialPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMultiNomialPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MultiNomialPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MultiNomialPostRequestBody();
}
