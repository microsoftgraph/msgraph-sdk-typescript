import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createExternalActivityFromDiscriminatorValue} from './createExternalActivityFromDiscriminatorValue';
import {ExternalActivity} from './externalActivity';
import {ExternalActivityCollectionResponse} from './externalActivityCollectionResponse';
import {serializeExternalActivity} from './serializeExternalActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalActivityCollectionResponse(externalActivityCollectionResponse: ExternalActivityCollectionResponse | undefined = {} as ExternalActivityCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(externalActivityCollectionResponse),
        "value": n => { externalActivityCollectionResponse.value = n.getCollectionOfObjectValues<ExternalActivity>(createExternalActivityFromDiscriminatorValue); },
    }
}
