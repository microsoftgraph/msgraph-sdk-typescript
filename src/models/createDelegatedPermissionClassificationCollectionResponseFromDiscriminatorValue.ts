import {DelegatedPermissionClassificationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedPermissionClassificationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedPermissionClassificationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedPermissionClassificationCollectionResponseImpl();
}
