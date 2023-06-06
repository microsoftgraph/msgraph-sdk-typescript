import {deserializeIntoGetAllSitesResponse} from './deserializeIntoGetAllSitesResponse';
import {GetAllSitesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAllSitesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAllSitesResponse;
}
