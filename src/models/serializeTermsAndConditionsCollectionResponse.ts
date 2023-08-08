import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTermsAndConditions} from './serializeTermsAndConditions';
import type {TermsAndConditions} from './termsAndConditions';
import type {TermsAndConditionsCollectionResponse} from './termsAndConditionsCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsCollectionResponse(writer: SerializationWriter, termsAndConditionsCollectionResponse: TermsAndConditionsCollectionResponse | undefined = {} as TermsAndConditionsCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termsAndConditionsCollectionResponse)
        writer.writeCollectionOfObjectValues<TermsAndConditions>("value", termsAndConditionsCollectionResponse.value, serializeTermsAndConditions);
}
