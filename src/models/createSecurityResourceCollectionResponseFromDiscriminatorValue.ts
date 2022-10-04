import {SecurityResourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecurityResourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecurityResourceCollectionResponse();
}
