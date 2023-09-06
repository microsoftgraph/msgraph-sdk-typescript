import { type AdministrativeUnit } from './administrativeUnit';
import { type AdministrativeUnitCollectionResponse } from './administrativeUnitCollectionResponse';
import { serializeAdministrativeUnit } from './serializeAdministrativeUnit';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAdministrativeUnitCollectionResponse(writer: SerializationWriter, administrativeUnitCollectionResponse: AdministrativeUnitCollectionResponse | undefined = {} as AdministrativeUnitCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, administrativeUnitCollectionResponse)
        writer.writeCollectionOfObjectValues<AdministrativeUnit>("value", administrativeUnitCollectionResponse.value, serializeAdministrativeUnit);
}
