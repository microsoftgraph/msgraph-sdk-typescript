import {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {OpenShiftChangeRequestCollectionResponse} from './openShiftChangeRequestCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOpenShiftChangeRequest} from './serializeOpenShiftChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenShiftChangeRequestCollectionResponse(writer: SerializationWriter, openShiftChangeRequestCollectionResponse: OpenShiftChangeRequestCollectionResponse | undefined = {} as OpenShiftChangeRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, openShiftChangeRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<OpenShiftChangeRequest>("value", openShiftChangeRequestCollectionResponse.value, serializeOpenShiftChangeRequest);
}
