import {deserializeIntoTokenLifetimePolicyCollectionResponse} from './deserializeIntoTokenLifetimePolicyCollectionResponse';
import {TokenLifetimePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenLifetimePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTokenLifetimePolicyCollectionResponse;
}
