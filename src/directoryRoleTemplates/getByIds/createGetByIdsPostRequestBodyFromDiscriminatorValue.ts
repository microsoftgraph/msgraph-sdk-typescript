import {GetByIdsPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetByIdsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetByIdsPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetByIdsPostRequestBodyImpl();
}
