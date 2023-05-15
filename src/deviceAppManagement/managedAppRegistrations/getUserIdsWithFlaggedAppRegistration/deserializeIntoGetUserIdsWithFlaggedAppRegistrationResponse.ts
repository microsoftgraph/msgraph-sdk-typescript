import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetUserIdsWithFlaggedAppRegistrationResponse} from './getUserIdsWithFlaggedAppRegistrationResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetUserIdsWithFlaggedAppRegistrationResponse(getUserIdsWithFlaggedAppRegistrationResponse: GetUserIdsWithFlaggedAppRegistrationResponse | undefined = {} as GetUserIdsWithFlaggedAppRegistrationResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getUserIdsWithFlaggedAppRegistrationResponse),
        "value": n => { getUserIdsWithFlaggedAppRegistrationResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
