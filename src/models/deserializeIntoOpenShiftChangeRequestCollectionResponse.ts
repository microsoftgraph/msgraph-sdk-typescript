import {createOpenShiftChangeRequestFromDiscriminatorValue} from './createOpenShiftChangeRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {OpenShiftChangeRequest} from './openShiftChangeRequest';
import type {OpenShiftChangeRequestCollectionResponse} from './openShiftChangeRequestCollectionResponse';
import {serializeOpenShiftChangeRequest} from './serializeOpenShiftChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftChangeRequestCollectionResponse(openShiftChangeRequestCollectionResponse: OpenShiftChangeRequestCollectionResponse | undefined = {} as OpenShiftChangeRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(openShiftChangeRequestCollectionResponse),
        "value": n => { openShiftChangeRequestCollectionResponse.value = n.getCollectionOfObjectValues<OpenShiftChangeRequest>(createOpenShiftChangeRequestFromDiscriminatorValue); },
    }
}
