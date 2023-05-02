import {deserializeIntoAppCatalogs} from './deserializeIntoAppCatalogs';
import {AppCatalogs} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppCatalogsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppCatalogs;
}
