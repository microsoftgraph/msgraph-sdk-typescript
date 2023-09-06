import { deserializeIntoGetAllSitesResponse } from './deserializeIntoGetAllSitesResponse';
import { type GetAllSitesResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetAllSitesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAllSitesResponse;
}
