import {createExternalActivityFromDiscriminatorValue} from '../../../../../../models/externalConnectors/createExternalActivityFromDiscriminatorValue';
import type {ExternalActivity} from '../../../../../../models/externalConnectors/externalActivity';
import {serializeExternalActivity} from '../../../../../../models/externalConnectors/serializeExternalActivity';
import type {AddActivitiesPostRequestBody} from './addActivitiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddActivitiesPostRequestBody(addActivitiesPostRequestBody: AddActivitiesPostRequestBody | undefined = {} as AddActivitiesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "activities": n => { addActivitiesPostRequestBody.activities = n.getCollectionOfObjectValues<ExternalActivity>(createExternalActivityFromDiscriminatorValue); },
    }
}
