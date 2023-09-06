import { deserializeIntoLocalizedName } from './deserializeIntoLocalizedName';
import { type LocalizedName } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLocalizedNameFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocalizedName;
}
