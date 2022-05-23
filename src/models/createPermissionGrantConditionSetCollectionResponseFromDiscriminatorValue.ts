import {PermissionGrantConditionSetCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantConditionSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionGrantConditionSetCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionGrantConditionSetCollectionResponseImpl();
}
