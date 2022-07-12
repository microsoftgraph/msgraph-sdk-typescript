import {AppCatalogsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppCatalogsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AppCatalogsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppCatalogsMember1();
}
