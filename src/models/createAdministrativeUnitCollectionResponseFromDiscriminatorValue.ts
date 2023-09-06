import { deserializeIntoAdministrativeUnitCollectionResponse } from './deserializeIntoAdministrativeUnitCollectionResponse';
import { type AdministrativeUnitCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAdministrativeUnitCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAdministrativeUnitCollectionResponse;
}
