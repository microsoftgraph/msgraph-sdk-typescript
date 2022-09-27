import {AndroidWorkProfileCompliancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileCompliancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidWorkProfileCompliancePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidWorkProfileCompliancePolicyCollectionResponse();
}
