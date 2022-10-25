import {PhysicalAddressCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhysicalAddressCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhysicalAddressCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhysicalAddressCollectionResponse();
}
