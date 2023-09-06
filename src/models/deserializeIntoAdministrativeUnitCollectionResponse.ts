import { type AdministrativeUnit } from './administrativeUnit';
import { type AdministrativeUnitCollectionResponse } from './administrativeUnitCollectionResponse';
import { createAdministrativeUnitFromDiscriminatorValue } from './createAdministrativeUnitFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAdministrativeUnit } from './serializeAdministrativeUnit';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAdministrativeUnitCollectionResponse(administrativeUnitCollectionResponse: AdministrativeUnitCollectionResponse | undefined = {} as AdministrativeUnitCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(administrativeUnitCollectionResponse),
        "value": n => { administrativeUnitCollectionResponse.value = n.getCollectionOfObjectValues<AdministrativeUnit>(createAdministrativeUnitFromDiscriminatorValue); },
    }
}
