import { type SecureScoreControlProfile } from './secureScoreControlProfile';
import { type SecureScoreControlProfileCollectionResponse } from './secureScoreControlProfileCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeSecureScoreControlProfile } from './serializeSecureScoreControlProfile';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSecureScoreControlProfileCollectionResponse(writer: SerializationWriter, secureScoreControlProfileCollectionResponse: SecureScoreControlProfileCollectionResponse | undefined = {} as SecureScoreControlProfileCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, secureScoreControlProfileCollectionResponse)
        writer.writeCollectionOfObjectValues<SecureScoreControlProfile>("value", secureScoreControlProfileCollectionResponse.value, serializeSecureScoreControlProfile);
}
