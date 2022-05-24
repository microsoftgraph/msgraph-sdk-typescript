import {QueryPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueryPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : QueryPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QueryPostRequestBodyImpl();
}
