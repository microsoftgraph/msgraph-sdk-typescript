import {RestoreRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRestoreRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RestoreRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RestoreRequestBodyImpl();
}
