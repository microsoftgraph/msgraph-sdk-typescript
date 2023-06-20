import {AccessPackageAssignment} from '../../../../models/accessPackageAssignment';
import {serializeAccessPackageAssignment} from '../../../../models/serializeAccessPackageAssignment';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {AdditionalAccessResponse} from './additionalAccessResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdditionalAccessResponse(additionalAccessResponse: AdditionalAccessResponse | undefined = {} as AdditionalAccessResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, additionalAccessResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("value", additionalAccessResponse.value, serializeAccessPackageAssignment);
}
