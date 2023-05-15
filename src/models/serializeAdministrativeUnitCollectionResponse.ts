import {AdministrativeUnit} from './administrativeUnit';
import {AdministrativeUnitCollectionResponse} from './administrativeUnitCollectionResponse';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdministrativeUnitCollectionResponse(writer: SerializationWriter, administrativeUnitCollectionResponse: AdministrativeUnitCollectionResponse | undefined = {} as AdministrativeUnitCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, administrativeUnitCollectionResponse)
        writer.writeCollectionOfObjectValues<AdministrativeUnit>("value", administrativeUnitCollectionResponse.value, serializeAdministrativeUnit);
}
