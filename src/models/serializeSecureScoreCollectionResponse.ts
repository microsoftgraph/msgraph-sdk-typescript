import {SecureScore} from './secureScore';
import {SecureScoreCollectionResponse} from './secureScoreCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSecureScore} from './serializeSecureScore';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecureScoreCollectionResponse(writer: SerializationWriter, secureScoreCollectionResponse: SecureScoreCollectionResponse | undefined = {} as SecureScoreCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, secureScoreCollectionResponse)
        writer.writeCollectionOfObjectValues<SecureScore>("value", secureScoreCollectionResponse.value, serializeSecureScore);
}
