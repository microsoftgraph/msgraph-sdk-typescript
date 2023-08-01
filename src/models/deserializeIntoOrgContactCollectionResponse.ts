import {createOrgContactFromDiscriminatorValue} from './createOrgContactFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {OrgContact} from './orgContact';
import type {OrgContactCollectionResponse} from './orgContactCollectionResponse';
import {serializeOrgContact} from './serializeOrgContact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrgContactCollectionResponse(orgContactCollectionResponse: OrgContactCollectionResponse | undefined = {} as OrgContactCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(orgContactCollectionResponse),
        "value": n => { orgContactCollectionResponse.value = n.getCollectionOfObjectValues<OrgContact>(createOrgContactFromDiscriminatorValue); },
    }
}
