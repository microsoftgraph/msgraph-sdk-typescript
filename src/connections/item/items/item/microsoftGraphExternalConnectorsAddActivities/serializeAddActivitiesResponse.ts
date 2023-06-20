import {ExternalActivityResult} from '../../../../../models/externalConnectors/externalActivityResult';
import {serializeExternalActivityResult} from '../../../../../models/externalConnectors/serializeExternalActivityResult';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {AddActivitiesResponse} from './addActivitiesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddActivitiesResponse(addActivitiesResponse: AddActivitiesResponse | undefined = {} as AddActivitiesResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, addActivitiesResponse)
        writer.writeCollectionOfObjectValues<ExternalActivityResult>("value", addActivitiesResponse.value, serializeExternalActivityResult);
}
