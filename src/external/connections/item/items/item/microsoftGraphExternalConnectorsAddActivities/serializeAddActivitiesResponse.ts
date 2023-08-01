import type {ExternalActivityResult} from '../../../../../../models/externalConnectors/externalActivityResult';
import {serializeExternalActivityResult} from '../../../../../../models/externalConnectors/serializeExternalActivityResult';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import type {AddActivitiesResponse} from './addActivitiesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddActivitiesResponse(writer: SerializationWriter, addActivitiesResponse: AddActivitiesResponse | undefined = {} as AddActivitiesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, addActivitiesResponse)
        writer.writeCollectionOfObjectValues<ExternalActivityResult>("value", addActivitiesResponse.value, serializeExternalActivityResult);
}
