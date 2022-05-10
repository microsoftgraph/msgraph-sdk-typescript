import {AdministrativeUnitCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdministrativeUnitCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdministrativeUnitCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdministrativeUnitCollectionResponseImpl();
}
