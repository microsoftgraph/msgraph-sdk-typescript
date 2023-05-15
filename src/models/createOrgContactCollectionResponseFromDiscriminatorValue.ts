import {deserializeIntoOrgContactCollectionResponse} from './deserializeIntoOrgContactCollectionResponse';
import {OrgContactCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrgContactCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrgContactCollectionResponse;
}
