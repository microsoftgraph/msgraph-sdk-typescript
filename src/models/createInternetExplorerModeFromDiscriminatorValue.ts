import { deserializeIntoInternetExplorerMode } from './deserializeIntoInternetExplorerMode';
import { type InternetExplorerMode } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInternetExplorerModeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInternetExplorerMode;
}
