import {CloneRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloneRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloneRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloneRequestBodyImpl();
}
