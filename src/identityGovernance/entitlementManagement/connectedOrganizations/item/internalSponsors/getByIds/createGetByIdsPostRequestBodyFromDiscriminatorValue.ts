import {GetByIdsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetByIdsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetByIdsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetByIdsPostRequestBody();
}
