import { deserializeIntoOrganizationCollectionResponse } from './deserializeIntoOrganizationCollectionResponse';
import { type OrganizationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOrganizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrganizationCollectionResponse;
}
