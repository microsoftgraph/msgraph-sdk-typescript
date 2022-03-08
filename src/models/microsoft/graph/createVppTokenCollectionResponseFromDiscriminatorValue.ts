import {VppTokenCollectionResponse} from './vppTokenCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVppTokenCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : VppTokenCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VppTokenCollectionResponse();
}
