import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {Organization} from './organization';
import type {OrganizationCollectionResponse} from './organizationCollectionResponse';
import {serializeOrganization} from './serializeOrganization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationCollectionResponse(organizationCollectionResponse: OrganizationCollectionResponse | undefined = {} as OrganizationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(organizationCollectionResponse),
        "value": n => { organizationCollectionResponse.value = n.getCollectionOfObjectValues<Organization>(createOrganizationFromDiscriminatorValue); },
    }
}
