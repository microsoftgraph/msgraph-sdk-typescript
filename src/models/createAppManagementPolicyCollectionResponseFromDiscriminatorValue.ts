import {deserializeIntoAppManagementPolicyCollectionResponse} from './deserializeIntoAppManagementPolicyCollectionResponse';
import {AppManagementPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppManagementPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppManagementPolicyCollectionResponse;
}
