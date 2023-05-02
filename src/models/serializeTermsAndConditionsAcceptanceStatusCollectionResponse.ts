import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTermsAndConditionsAcceptanceStatus} from './serializeTermsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAcceptanceStatusCollectionResponse} from './termsAndConditionsAcceptanceStatusCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAcceptanceStatusCollectionResponse(writer: SerializationWriter, termsAndConditionsAcceptanceStatusCollectionResponse: TermsAndConditionsAcceptanceStatusCollectionResponse | undefined = {} as TermsAndConditionsAcceptanceStatusCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termsAndConditionsAcceptanceStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<TermsAndConditionsAcceptanceStatus>("value", termsAndConditionsAcceptanceStatusCollectionResponse.value, serializeTermsAndConditionsAcceptanceStatus);
}
