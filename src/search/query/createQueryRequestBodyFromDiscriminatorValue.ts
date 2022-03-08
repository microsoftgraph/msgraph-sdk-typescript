import {QueryRequestBody} from './queryRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueryRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : QueryRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QueryRequestBody();
}
