import {ManagedAppProtectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppProtectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppProtectionCollectionResponse();
}
