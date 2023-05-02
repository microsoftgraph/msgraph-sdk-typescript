import {createUserConsentRequestFromDiscriminatorValue} from '../../../../../../models/createUserConsentRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserConsentRequest} from '../../../../../../models/serializeUserConsentRequest';
import {UserConsentRequest} from '../../../../../../models/userConsentRequest';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<UserConsentRequest>(createUserConsentRequestFromDiscriminatorValue); },
    }
}
