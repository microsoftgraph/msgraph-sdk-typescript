import {StsPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStsPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : StsPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StsPolicyCollectionResponse();
}
