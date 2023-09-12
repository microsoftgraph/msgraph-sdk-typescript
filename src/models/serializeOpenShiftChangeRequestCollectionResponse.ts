import { type OpenShiftChangeRequest } from './openShiftChangeRequest';
import { type OpenShiftChangeRequestCollectionResponse } from './openShiftChangeRequestCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeOpenShiftChangeRequest } from './serializeOpenShiftChangeRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOpenShiftChangeRequestCollectionResponse(writer: SerializationWriter, openShiftChangeRequestCollectionResponse: OpenShiftChangeRequestCollectionResponse | undefined = {} as OpenShiftChangeRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, openShiftChangeRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<OpenShiftChangeRequest>("value", openShiftChangeRequestCollectionResponse.value, serializeOpenShiftChangeRequest);
}
