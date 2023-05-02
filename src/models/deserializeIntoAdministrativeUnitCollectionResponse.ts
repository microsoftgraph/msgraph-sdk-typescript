import {AdministrativeUnit} from './administrativeUnit';
import {AdministrativeUnitCollectionResponse} from './administrativeUnitCollectionResponse';
import {createAdministrativeUnitFromDiscriminatorValue} from './createAdministrativeUnitFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdministrativeUnitCollectionResponse(administrativeUnitCollectionResponse: AdministrativeUnitCollectionResponse | undefined = {} as AdministrativeUnitCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(administrativeUnitCollectionResponse),
        "value": n => { administrativeUnitCollectionResponse.value = n.getCollectionOfObjectValues<AdministrativeUnit>(createAdministrativeUnitFromDiscriminatorValue); },
    }
}
