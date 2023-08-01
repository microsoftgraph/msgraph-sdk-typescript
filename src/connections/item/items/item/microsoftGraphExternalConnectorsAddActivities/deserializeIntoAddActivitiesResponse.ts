import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {createExternalActivityResultFromDiscriminatorValue} from '../../../../../models/externalConnectors/createExternalActivityResultFromDiscriminatorValue';
import type {ExternalActivityResult} from '../../../../../models/externalConnectors/externalActivityResult';
import {serializeExternalActivityResult} from '../../../../../models/externalConnectors/serializeExternalActivityResult';
import type {AddActivitiesResponse} from './addActivitiesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddActivitiesResponse(addActivitiesResponse: AddActivitiesResponse | undefined = {} as AddActivitiesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(addActivitiesResponse),
        "value": n => { addActivitiesResponse.value = n.getCollectionOfObjectValues<ExternalActivityResult>(createExternalActivityResultFromDiscriminatorValue); },
    }
}
