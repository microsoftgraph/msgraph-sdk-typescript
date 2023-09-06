import { createOpenShiftFromDiscriminatorValue } from './createOpenShiftFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type OpenShift } from './openShift';
import { type OpenShiftCollectionResponse } from './openShiftCollectionResponse';
import { serializeOpenShift } from './serializeOpenShift';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftCollectionResponse(openShiftCollectionResponse: OpenShiftCollectionResponse | undefined = {} as OpenShiftCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(openShiftCollectionResponse),
        "value": n => { openShiftCollectionResponse.value = n.getCollectionOfObjectValues<OpenShift>(createOpenShiftFromDiscriminatorValue); },
    }
}
