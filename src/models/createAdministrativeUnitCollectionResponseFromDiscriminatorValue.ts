import {deserializeIntoAdministrativeUnitCollectionResponse} from './deserializeIntoAdministrativeUnitCollectionResponse';
import {AdministrativeUnitCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdministrativeUnitCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAdministrativeUnitCollectionResponse;
}
