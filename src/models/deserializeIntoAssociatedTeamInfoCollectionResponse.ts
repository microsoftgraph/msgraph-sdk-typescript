import type {AssociatedTeamInfo} from './associatedTeamInfo';
import type {AssociatedTeamInfoCollectionResponse} from './associatedTeamInfoCollectionResponse';
import {createAssociatedTeamInfoFromDiscriminatorValue} from './createAssociatedTeamInfoFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAssociatedTeamInfo} from './serializeAssociatedTeamInfo';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssociatedTeamInfoCollectionResponse(associatedTeamInfoCollectionResponse: AssociatedTeamInfoCollectionResponse | undefined = {} as AssociatedTeamInfoCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(associatedTeamInfoCollectionResponse),
        "value": n => { associatedTeamInfoCollectionResponse.value = n.getCollectionOfObjectValues<AssociatedTeamInfo>(createAssociatedTeamInfoFromDiscriminatorValue); },
    }
}
