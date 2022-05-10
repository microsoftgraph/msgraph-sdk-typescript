import {AdministrativeUnitImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdministrativeUnitFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdministrativeUnitImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdministrativeUnitImpl();
}
