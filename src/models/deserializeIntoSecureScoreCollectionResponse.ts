import { createSecureScoreFromDiscriminatorValue } from './createSecureScoreFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type SecureScore } from './secureScore';
import { type SecureScoreCollectionResponse } from './secureScoreCollectionResponse';
import { serializeSecureScore } from './serializeSecureScore';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreCollectionResponse(secureScoreCollectionResponse: SecureScoreCollectionResponse | undefined = {} as SecureScoreCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(secureScoreCollectionResponse),
        "value": n => { secureScoreCollectionResponse.value = n.getCollectionOfObjectValues<SecureScore>(createSecureScoreFromDiscriminatorValue); },
    }
}
