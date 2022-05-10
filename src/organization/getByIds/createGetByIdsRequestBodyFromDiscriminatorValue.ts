import {GetByIdsRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetByIdsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetByIdsRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetByIdsRequestBodyImpl();
}
