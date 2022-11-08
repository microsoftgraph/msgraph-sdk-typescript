import {TargetedManagedAppProtectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetedManagedAppProtectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetedManagedAppProtectionCollectionResponse();
}
