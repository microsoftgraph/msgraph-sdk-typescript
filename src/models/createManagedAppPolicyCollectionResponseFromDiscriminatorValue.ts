import {deserializeIntoManagedAppPolicyCollectionResponse} from './deserializeIntoManagedAppPolicyCollectionResponse';
import {ManagedAppPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppPolicyCollectionResponse;
}
