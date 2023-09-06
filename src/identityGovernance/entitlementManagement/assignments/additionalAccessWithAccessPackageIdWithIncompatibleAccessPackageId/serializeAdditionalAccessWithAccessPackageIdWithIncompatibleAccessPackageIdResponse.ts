import { type AccessPackageAssignment } from '../../../../models/accessPackageAssignment';
import { serializeAccessPackageAssignment } from '../../../../models/serializeAccessPackageAssignment';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import { type AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse } from './additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse(writer: SerializationWriter, additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse: AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse | undefined = {} as AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("value", additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse.value, serializeAccessPackageAssignment);
}
