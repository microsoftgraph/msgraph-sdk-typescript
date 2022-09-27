import {PhysicalOfficeAddressCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhysicalOfficeAddressCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhysicalOfficeAddressCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhysicalOfficeAddressCollectionResponse();
}
