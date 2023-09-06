import { deserializeIntoAppCatalogs } from './deserializeIntoAppCatalogs';
import { type AppCatalogs } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppCatalogsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppCatalogs;
}
