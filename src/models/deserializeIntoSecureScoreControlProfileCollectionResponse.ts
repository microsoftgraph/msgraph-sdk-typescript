import {createSecureScoreControlProfileFromDiscriminatorValue} from './createSecureScoreControlProfileFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {SecureScoreControlProfileCollectionResponse} from './secureScoreControlProfileCollectionResponse';
import {serializeSecureScoreControlProfile} from './serializeSecureScoreControlProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreControlProfileCollectionResponse(secureScoreControlProfileCollectionResponse: SecureScoreControlProfileCollectionResponse | undefined = {} as SecureScoreControlProfileCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(secureScoreControlProfileCollectionResponse),
        "value": n => { secureScoreControlProfileCollectionResponse.value = n.getCollectionOfObjectValues<SecureScoreControlProfile>(createSecureScoreControlProfileFromDiscriminatorValue); },
    }
}
