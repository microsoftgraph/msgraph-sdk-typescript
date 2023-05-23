import {ExternalActivity} from '../../../../../models/externalConnectors/externalActivity';
import {serializeExternalActivity} from '../../../../../models/externalConnectors/serializeExternalActivity';
import {AddActivitiesPostRequestBody} from './addActivitiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddActivitiesPostRequestBody(writer: SerializationWriter, addActivitiesPostRequestBody: AddActivitiesPostRequestBody | undefined = {} as AddActivitiesPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<ExternalActivity>("activities", addActivitiesPostRequestBody.activities, serializeExternalActivity);
        writer.writeAdditionalData(addActivitiesPostRequestBody.additionalData);
}
