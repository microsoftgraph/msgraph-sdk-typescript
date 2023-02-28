import {AppManagementPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppManagementPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppManagementPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppManagementPolicyCollectionResponse();
}
