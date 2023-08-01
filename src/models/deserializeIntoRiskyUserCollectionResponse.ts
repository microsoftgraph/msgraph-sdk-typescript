import {createRiskyUserFromDiscriminatorValue} from './createRiskyUserFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {RiskyUser} from './riskyUser';
import type {RiskyUserCollectionResponse} from './riskyUserCollectionResponse';
import {serializeRiskyUser} from './serializeRiskyUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyUserCollectionResponse(riskyUserCollectionResponse: RiskyUserCollectionResponse | undefined = {} as RiskyUserCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(riskyUserCollectionResponse),
        "value": n => { riskyUserCollectionResponse.value = n.getCollectionOfObjectValues<RiskyUser>(createRiskyUserFromDiscriminatorValue); },
    }
}
