import type {AccessPackageAssignment} from '../../../../models/accessPackageAssignment';
import {serializeAccessPackageAssignment} from '../../../../models/serializeAccessPackageAssignment';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import type {AdditionalAccessResponse} from './additionalAccessResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdditionalAccessResponse(writer: SerializationWriter, additionalAccessResponse: AdditionalAccessResponse | undefined = {} as AdditionalAccessResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, additionalAccessResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("value", additionalAccessResponse.value, serializeAccessPackageAssignment);
}
