import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeTermsAndConditionsAcceptanceStatus } from './serializeTermsAndConditionsAcceptanceStatus';
import { type TermsAndConditionsAcceptanceStatus } from './termsAndConditionsAcceptanceStatus';
import { type TermsAndConditionsAcceptanceStatusCollectionResponse } from './termsAndConditionsAcceptanceStatusCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAcceptanceStatusCollectionResponse(writer: SerializationWriter, termsAndConditionsAcceptanceStatusCollectionResponse: TermsAndConditionsAcceptanceStatusCollectionResponse | undefined = {} as TermsAndConditionsAcceptanceStatusCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termsAndConditionsAcceptanceStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<TermsAndConditionsAcceptanceStatus>("value", termsAndConditionsAcceptanceStatusCollectionResponse.value, serializeTermsAndConditionsAcceptanceStatus);
}
