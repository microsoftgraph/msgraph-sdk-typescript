import {AccessPackageAssignment} from '../../../../models/accessPackageAssignment';
import {serializeAccessPackageAssignment} from '../../../../models/serializeAccessPackageAssignment';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse} from './additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse(additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse: AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse | undefined = {} as AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("value", additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse.value, serializeAccessPackageAssignment);
}
