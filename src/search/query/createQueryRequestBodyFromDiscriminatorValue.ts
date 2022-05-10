import {QueryRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueryRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : QueryRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QueryRequestBodyImpl();
}
