import {OptionalClaimCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOptionalClaimCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OptionalClaimCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OptionalClaimCollectionResponse();
}
