import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type GetUserIdsWithFlaggedAppRegistrationResponse } from './getUserIdsWithFlaggedAppRegistrationResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetUserIdsWithFlaggedAppRegistrationResponse(getUserIdsWithFlaggedAppRegistrationResponse: GetUserIdsWithFlaggedAppRegistrationResponse | undefined = {} as GetUserIdsWithFlaggedAppRegistrationResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getUserIdsWithFlaggedAppRegistrationResponse),
        "value": n => { getUserIdsWithFlaggedAppRegistrationResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
