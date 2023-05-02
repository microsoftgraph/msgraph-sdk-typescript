import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {SecureScoreControlProfileCollectionResponse} from './secureScoreControlProfileCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSecureScoreControlProfile} from './serializeSecureScoreControlProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecureScoreControlProfileCollectionResponse(writer: SerializationWriter, secureScoreControlProfileCollectionResponse: SecureScoreControlProfileCollectionResponse | undefined = {} as SecureScoreControlProfileCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, secureScoreControlProfileCollectionResponse)
        writer.writeCollectionOfObjectValues<SecureScoreControlProfile>("value", secureScoreControlProfileCollectionResponse.value, serializeSecureScoreControlProfile);
}
