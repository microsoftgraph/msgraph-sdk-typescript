import {QueryPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueryPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : QueryPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QueryPostRequestBody();
}
