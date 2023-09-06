import { type OpenShift } from './openShift';
import { type OpenShiftCollectionResponse } from './openShiftCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeOpenShift } from './serializeOpenShift';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOpenShiftCollectionResponse(writer: SerializationWriter, openShiftCollectionResponse: OpenShiftCollectionResponse | undefined = {} as OpenShiftCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, openShiftCollectionResponse)
        writer.writeCollectionOfObjectValues<OpenShift>("value", openShiftCollectionResponse.value, serializeOpenShift);
}
