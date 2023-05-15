import {createSecureScoreFromDiscriminatorValue} from './createSecureScoreFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {SecureScore} from './secureScore';
import {SecureScoreCollectionResponse} from './secureScoreCollectionResponse';
import {serializeSecureScore} from './serializeSecureScore';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreCollectionResponse(secureScoreCollectionResponse: SecureScoreCollectionResponse | undefined = {} as SecureScoreCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(secureScoreCollectionResponse),
        "value": n => { secureScoreCollectionResponse.value = n.getCollectionOfObjectValues<SecureScore>(createSecureScoreFromDiscriminatorValue); },
    }
}
