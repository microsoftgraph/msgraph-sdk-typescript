import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeTermsAndConditionsAssignment } from './serializeTermsAndConditionsAssignment';
import { type TermsAndConditionsAssignment } from './termsAndConditionsAssignment';
import { type TermsAndConditionsAssignmentCollectionResponse } from './termsAndConditionsAssignmentCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAssignmentCollectionResponse(writer: SerializationWriter, termsAndConditionsAssignmentCollectionResponse: TermsAndConditionsAssignmentCollectionResponse | undefined = {} as TermsAndConditionsAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termsAndConditionsAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<TermsAndConditionsAssignment>("value", termsAndConditionsAssignmentCollectionResponse.value, serializeTermsAndConditionsAssignment);
}
