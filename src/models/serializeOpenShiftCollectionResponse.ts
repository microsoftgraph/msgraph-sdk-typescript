import {OpenShift} from './openShift';
import {OpenShiftCollectionResponse} from './openShiftCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOpenShift} from './serializeOpenShift';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenShiftCollectionResponse(writer: SerializationWriter, openShiftCollectionResponse: OpenShiftCollectionResponse | undefined = {} as OpenShiftCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, openShiftCollectionResponse)
        writer.writeCollectionOfObjectValues<OpenShift>("value", openShiftCollectionResponse.value, serializeOpenShift);
}
