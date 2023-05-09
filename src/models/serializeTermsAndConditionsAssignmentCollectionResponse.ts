import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTermsAndConditionsAssignment} from './serializeTermsAndConditionsAssignment';
import {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import {TermsAndConditionsAssignmentCollectionResponse} from './termsAndConditionsAssignmentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAssignmentCollectionResponse(writer: SerializationWriter, termsAndConditionsAssignmentCollectionResponse: TermsAndConditionsAssignmentCollectionResponse | undefined = {} as TermsAndConditionsAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termsAndConditionsAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<TermsAndConditionsAssignment>("value", termsAndConditionsAssignmentCollectionResponse.value, serializeTermsAndConditionsAssignment);
}
