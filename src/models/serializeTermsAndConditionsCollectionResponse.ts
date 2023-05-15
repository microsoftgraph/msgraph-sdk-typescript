import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTermsAndConditions} from './serializeTermsAndConditions';
import {TermsAndConditions} from './termsAndConditions';
import {TermsAndConditionsCollectionResponse} from './termsAndConditionsCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsCollectionResponse(writer: SerializationWriter, termsAndConditionsCollectionResponse: TermsAndConditionsCollectionResponse | undefined = {} as TermsAndConditionsCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termsAndConditionsCollectionResponse)
        writer.writeCollectionOfObjectValues<TermsAndConditions>("value", termsAndConditionsCollectionResponse.value, serializeTermsAndConditions);
}
