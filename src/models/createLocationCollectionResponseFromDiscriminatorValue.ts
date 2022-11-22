import {LocationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocationCollectionResponse();
}
