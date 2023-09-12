import { deserializeIntoOrgContactCollectionResponse } from './deserializeIntoOrgContactCollectionResponse';
import { type OrgContactCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOrgContactCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrgContactCollectionResponse;
}
