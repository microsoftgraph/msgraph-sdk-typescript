import {createOpenShiftFromDiscriminatorValue} from './createOpenShiftFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {OpenShift} from './openShift';
import {OpenShiftCollectionResponse} from './openShiftCollectionResponse';
import {serializeOpenShift} from './serializeOpenShift';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftCollectionResponse(openShiftCollectionResponse: OpenShiftCollectionResponse | undefined = {} as OpenShiftCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(openShiftCollectionResponse),
        "value": n => { openShiftCollectionResponse.value = n.getCollectionOfObjectValues<OpenShift>(createOpenShiftFromDiscriminatorValue); },
    }
}
