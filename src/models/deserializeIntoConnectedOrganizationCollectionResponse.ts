import {ConnectedOrganization} from './connectedOrganization';
import {ConnectedOrganizationCollectionResponse} from './connectedOrganizationCollectionResponse';
import {createConnectedOrganizationFromDiscriminatorValue} from './createConnectedOrganizationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeConnectedOrganization} from './serializeConnectedOrganization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConnectedOrganizationCollectionResponse(connectedOrganizationCollectionResponse: ConnectedOrganizationCollectionResponse | undefined = {} as ConnectedOrganizationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(connectedOrganizationCollectionResponse),
        "value": n => { connectedOrganizationCollectionResponse.value = n.getCollectionOfObjectValues<ConnectedOrganization>(createConnectedOrganizationFromDiscriminatorValue); },
    }
}
