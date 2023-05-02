import {deserializeIntoConnectedOrganizationCollectionResponse} from './deserializeIntoConnectedOrganizationCollectionResponse';
import {ConnectedOrganizationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectedOrganizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConnectedOrganizationCollectionResponse;
}
