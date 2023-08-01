import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createExternalGroupFromDiscriminatorValue} from './createExternalGroupFromDiscriminatorValue';
import type {ExternalGroup} from './externalGroup';
import type {ExternalGroupCollectionResponse} from './externalGroupCollectionResponse';
import {serializeExternalGroup} from './serializeExternalGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalGroupCollectionResponse(externalGroupCollectionResponse: ExternalGroupCollectionResponse | undefined = {} as ExternalGroupCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(externalGroupCollectionResponse),
        "value": n => { externalGroupCollectionResponse.value = n.getCollectionOfObjectValues<ExternalGroup>(createExternalGroupFromDiscriminatorValue); },
    }
}
