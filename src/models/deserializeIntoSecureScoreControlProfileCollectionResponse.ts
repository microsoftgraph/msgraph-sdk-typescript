import {createSecureScoreControlProfileFromDiscriminatorValue} from './createSecureScoreControlProfileFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {SecureScoreControlProfile} from './secureScoreControlProfile';
import type {SecureScoreControlProfileCollectionResponse} from './secureScoreControlProfileCollectionResponse';
import {serializeSecureScoreControlProfile} from './serializeSecureScoreControlProfile';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreControlProfileCollectionResponse(secureScoreControlProfileCollectionResponse: SecureScoreControlProfileCollectionResponse | undefined = {} as SecureScoreControlProfileCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(secureScoreControlProfileCollectionResponse),
        "value": n => { secureScoreControlProfileCollectionResponse.value = n.getCollectionOfObjectValues<SecureScoreControlProfile>(createSecureScoreControlProfileFromDiscriminatorValue); },
    }
}
