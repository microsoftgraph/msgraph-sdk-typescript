import {deserializeIntoTokenIssuancePolicyCollectionResponse} from './deserializeIntoTokenIssuancePolicyCollectionResponse';
import {TokenIssuancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenIssuancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTokenIssuancePolicyCollectionResponse;
}
