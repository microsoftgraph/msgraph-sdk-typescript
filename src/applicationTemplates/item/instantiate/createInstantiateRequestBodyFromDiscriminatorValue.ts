import {InstantiateRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInstantiateRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : InstantiateRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InstantiateRequestBodyImpl();
}
