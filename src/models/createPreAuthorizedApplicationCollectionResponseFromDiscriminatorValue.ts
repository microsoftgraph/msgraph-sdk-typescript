import {PreAuthorizedApplicationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPreAuthorizedApplicationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PreAuthorizedApplicationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PreAuthorizedApplicationCollectionResponse();
}
