import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {createExternalActivityResultFromDiscriminatorValue} from '../../../../../models/externalConnectors/createExternalActivityResultFromDiscriminatorValue';
import {ExternalActivityResult} from '../../../../../models/externalConnectors/externalActivityResult';
import {serializeExternalActivityResult} from '../../../../../models/externalConnectors/serializeExternalActivityResult';
import {AddActivitiesResponse} from './addActivitiesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddActivitiesResponse(addActivitiesResponse: AddActivitiesResponse | undefined = {} as AddActivitiesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(addActivitiesResponse),
        "value": n => { addActivitiesResponse.value = n.getCollectionOfObjectValues<ExternalActivityResult>(createExternalActivityResultFromDiscriminatorValue); },
    }
}
